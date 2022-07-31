const services = require("../model/service");

const getAllServices = async(rep,res)=>{
    
    services.find({}, 
    (err, docs) => {
    if (docs != null || docs != undefined) {
      res.json({data:docs});
    } else {
      res.json({error:err});
    }
  });
}
module.exports = getAllServices;

