

const { model, Schema } = require("mongoose");



const UsuarioSchema = new Schema(
  {
    user_mail: {type: String,unique: true,required:true},
    birthday: { type: String},
    phone:    { type: String },
    user_name: { type: String, },
    user_password: { type: String, },
    type:     { type: Number, required: true, default: 2, min: 1, max: 3 }
  },
  {
    timestamps: true,
    versionKey:false
  }
);

module.exports = model("Usuario", UsuarioSchema);
