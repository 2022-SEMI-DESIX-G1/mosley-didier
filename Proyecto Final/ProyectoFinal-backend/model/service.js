const { model, Schema } = require("mongoose");



const serviceSchema =  new Schema(
    {
      service_name:          {type: String, required: true},
      service_description:   {type:String ,required: true},
      author_name:          {type:String ,required: true},
      author_id:          {type:String ,required: true},
      price:                {type:String ,required: true},
      type:                 {type:String ,required: true},
      service_photo:         {type:String ,required: true}
    },
    {
      timestamps: true,
      versionKey:false
    }
  );

module.exports = model("services", serviceSchema);
