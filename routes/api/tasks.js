const express = require("express");
const isValidId = require("../../middlewares/isValidId");
const {
  getAll,
  getById,
  add,
  updateById,
  updateStatus,
  updatePriority,
  deleteById,
} = require("../../controllers/tasks");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", add);

router.put("/:id", isValidId, updateById);

router.patch("/:id/status", isValidId, updateStatus);

router.patch("/:id/priority", isValidId, updatePriority);

router.delete("/:id", isValidId, deleteById);

module.exports = router;
