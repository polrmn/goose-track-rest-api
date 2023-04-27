const express = require("express");
const isValidId = require("../../middlewares/isValidId");
const authenticate = require('../../middlewares/authenticate');
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

router.get("/", authenticate, getAll);

router.get("/:id",authenticate, isValidId, getById);

router.post("/", authenticate, add);

router.put("/:id", authenticate, isValidId, updateById);

router.patch("/:id/status", authenticate, isValidId, updateStatus);

router.patch("/:id/priority", authenticate, isValidId, updatePriority);

router.delete("/:id", authenticate, isValidId, deleteById);

module.exports = router;
