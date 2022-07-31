const category = require("../model/category");

const getAllCategories = async(rep,res)=>{
    
    category.find({}, 
    (err, docs) => {
    if (docs != null || docs != undefined) {
      res.json({data:docs});
    } else {
      res.json({error:err});
    }
  });
}
module.exports = getAllCategories;