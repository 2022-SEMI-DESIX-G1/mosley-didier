const { model, Schema } = require("mongoose");

const voucherSchema = Schema(
    {
      buyer_name: {type:String},
      seller_name: {type:String},
      price: {type:String},
      service_name:{type: String},
      date_shop: {type: String },
      id_service:{type: String},
      id_buyer:{type: String}
    },
    {
      timestamps: true,
      versionKey:false
    }
    );
    module.exports = model("voucher", voucherSchema);
