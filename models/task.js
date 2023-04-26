const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for task"],
    },
    status: {
      type: String,
      enum: ["toDo", "inProgress", "done"],
      default: "toDo",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    date: {
      start: {
        type: Date,
        required: [true, "Set the task's start date"],
      },
      end: {
        type: Date,
        required: [true, "Set the task's end date"],
      },
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

module.exports = Task;
