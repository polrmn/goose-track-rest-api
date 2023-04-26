const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // <--------------/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        match: emailRegexp,
        required: [true, 'Email is required'],
        unique: true,
    },
    token: String,
    avatarURL: {
        type: String
    },
    birthday: {
        type: String
    },
    phone: {
        type: String
    },
    skype: {
        type: String
    }
}, {
    versionKey: false,
    timestamps: true
});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;