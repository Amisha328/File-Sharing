import File from '../models/file.js';

export const uploadImage = async (req, res) => {
   // console.log("Upload image");
   const fileObj = {
      path: req.file.path,
      name: req.file.originalname,
   };

   try{
      const file = await File.create(fileObj);
      res.status(202).json({path: `http://localhost:8000/file/${file._id}`});
   }
   catch(err){
      res.status(500).json({ err: err.message });
   }
   // console.log(req);
}

export const getImage = async(req, res) => {
   try{
      const file = await File.findById(req.params.fileId);
      file.downloadCount++;
      await file.save();

      res.download(file.path, file.name);
   }
   catch(err){
      res.status(500).json({ err: err.message });
   }
}