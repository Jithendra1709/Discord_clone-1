// let multer=require('multer');
// let datauri=require('datauri');
// let path=require('path');

// const storage = multer.memoryStorage();
// const multerUploads = multer({ storage }).single('image');
// const dUri = new datauri();

// const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

// module.exports= { multerUploads ,dataUri};




const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("Unsupported file type!"), false);
      return;
    }
    cb(null, true);
  },
});