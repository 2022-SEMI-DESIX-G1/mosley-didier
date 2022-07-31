//const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");
//const jwt = require("jsonwebtoken");

const login = async (req, res) => {
const { user_mail, user_password } = req.body;
  /*const userData = {
    user_mail:"guerra@gmail.com",
    user_password: "123243",
    }*/
    console.log('Entró a la petición SIGNIN.');
    try {
      let userExist 
      Usuario.findOne({ user_mail: user_mail, user_password: user_password }, (err, docs) => {
      if (docs != null || docs != undefined) {
        
        userExist = docs;
        console.log('usuario existe',docs);
        res.json({ docs, login_status: true });
      } else {
        res.json({ docs, login_status: false });
      }
    });
    console.log(userExist);
  } catch (err) {
    console.log(err);
  }
};
module.exports = login;
