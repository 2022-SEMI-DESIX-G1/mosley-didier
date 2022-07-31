const services = require("../model/service");

const registerServices = async (req, res) => {
   console.log(req.body)
    const serviceData = {
        service_name:           req.body.service_name,
        service_description:    req.body.service_description,
        author_name:            req.body.author_name,
        author_id:              req.body.author_id,
        price:                  req.body.price,
        type:                   req.body.type,
        service_photo:          req.body.service_photo //"foto.jpg"
      };

      /*const serviceData = {
        service_name:          "ecommerce",
        service_description:    "desarrollo web y plugins",
        author_name:            "jostin",
        author_id:              "62db63104c615eb4daee4dc9",
        price:                  "24.5",
        category:                   "tecnología",
        service_photo:          "foto.jpg"
};*/
     
    try {
       services.create(serviceData, (err, docs) => {
         console.log(serviceData);
          if (err) {
            res.json({ Message: "Something bad :(", type: err, create: false });
          } else {
            res.json({ Message: "Created successfully :)", create: true,data: docs });
          }
        });
      } catch (err) {
        console.log(err);
      }
  };
  module.exports = registerServices;