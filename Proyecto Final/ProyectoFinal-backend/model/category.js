const { model, Schema } = require("mongoose");
const categorySchema = Schema(
  {
    category_name: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("category", categorySchema);
