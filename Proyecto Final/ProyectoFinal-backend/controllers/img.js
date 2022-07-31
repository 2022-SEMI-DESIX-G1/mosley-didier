const services = require("../model/service");
const multer  = require('multer');
const img= async (req,res)=>{

const id = services.Types.ObjectId(req.params.id);
  console.log(id);
  /*services.updateOne(
    {_id: id},
    {service_photo:req.file.filename},
    (err,docs)=>{
      res.send({
        items:docs
      });
    });*/
}
module.exports = img