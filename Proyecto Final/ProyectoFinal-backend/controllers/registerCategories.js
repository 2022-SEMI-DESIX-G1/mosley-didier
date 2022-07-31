const category = require("../model/category");

const registerCategories = async(req, res)=>{
    const categoryData = {
        category_name:           req.body.category_name
      };
    try {
        category.create(categoryData, (err, docs) => {
          //console.log(docs);
          if (err) {
            res.json({ Message: "Something bad :(", type: err, create: false });
          } else {
            res.json({ Message: "Created successfully :)", create: true });
          }
        });
      } catch (err) {
        console.log(err);
      }
}
module.exports = registerCategories;