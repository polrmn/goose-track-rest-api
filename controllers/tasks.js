const ctrlWrapper = require("../utils/ctrlWrapper");
const Task = require("../models/task");
const {
  addSchema,
  updateStatusSchema,
  updatePrioritySchema,
} = require("../schemas/tasks");
const HttpError = require("../helpers/HttpError");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Task.find({ owner }, "-createdAt -updatedAt").populate("owner", "name email");
  console.log(result);
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findById(id);
  if (result === null) {
    throw HttpError(404, 'Task with such id not found');
  }
  res.status(200).json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await Task.create({ ...req.body, owner });
  res.status(201).json({
    title: result.title,
    status: result.status,
    priority: result.priority,
    date: result.date,
    _id: result._id
  });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Task deleted" });
};

const updateById = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, (message = "missing fields"));
  }
  const { id } = req.params;
  const result = await Task.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const updateStatus = async (req, res) => {
  const { error } = updateStatusSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const { id } = req.params;
  const result = await Task.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const updatePriority = async (req, res) => {
  const { error } = updatePrioritySchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const { id } = req.params;
  const result = await Task.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateStatus: ctrlWrapper(updateStatus),
  updatePriority: ctrlWrapper(updatePriority),
};
