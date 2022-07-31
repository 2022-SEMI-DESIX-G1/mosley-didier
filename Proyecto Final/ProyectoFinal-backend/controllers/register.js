const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const register = async (req, res) => {
 
  const { user_name, user_mail, user_password, phone, birthday, type } = req.body;

  Usuario.findOne({ user_mail }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese usermail" });
    }
   else if (!user_name) {
      return res.json({ mensaje: "Falta el username" });
    } else if (!user_mail) {
      return res.json({ mensaje: "Falta el  usermail " });
    } else if (!user_password) {
      return res.json({ mensaje: "Falta el password" });
    } else {
      bcrypt.hash(user_password, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            user_name,
            user_mail,
            user_password,
            phone,
            birthday,
            type,
          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;
