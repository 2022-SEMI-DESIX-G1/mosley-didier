const register = require("./register");
const login = require("./login");
const getUserById = require("./getUserById");
const registerServices = require("./registerServices");
const registerCategory = require("./registerCategories");
const getAllCategories = require("./getAllCategories");
const getAllServices = require("./getAllServices");
const img = require("./img");

module.exports = {
  register,
  login,
  getUserById,
  registerServices,
  registerCategory,
  getAllCategories,
  getAllServices,
  img
};
