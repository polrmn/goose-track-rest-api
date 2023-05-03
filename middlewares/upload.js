const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "avatars",
    allowed_formats: ["jpg", "png", "jpeg", "gif"],
    transformation: [
      {
        width: 250,
        height: 250,
        crop: "thumb",
      },
      { quality: "auto:best" },
    ],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
