const servercontroller=require('../controllers/servercontroller');
const serverrouter=require('express').Router();
const {authenticateToken}=require('../controllers/authnitication');
const upload=require('../controllers/multer_middleware');

// const multerUploads=require('../controllers/multer_middleware');
// const dataUri=require('../controllers/multer_middleware');
// // import { uploader, cloudinaryConfig } from '../config/cloudinaryconfig';
// const uploader=require('../config/cloudinaryconfig');
// const cloudinaryConfig=require('../config/cloudinaryconfig');

// serverrouter.use('*', cloudinaryConfig);




serverrouter.post('/createserver',authenticateToken,/*multerUploads*/
// (req, res) => {
//     if(req.file) {
//     const file = dataUri(req).content;
//     return uploader.upload(file)
//     .then((result) => {
//     const image = result.url;
//     return res.status(200).send('uploaded')})
//     }

//  }
    upload.single("image"),servercontroller.createserver);
serverrouter.get('/server/getnonprivatechannels/:id',authenticateToken,servercontroller.getnonprivatechannels);
serverrouter.get('/getallservers',authenticateToken,servercontroller.getallservers);
serverrouter.post('/joinserver/:id',authenticateToken,servercontroller.joinserver);
serverrouter.delete('/leave',authenticateToken,servercontroller.leave);

module.exports=serverrouter;