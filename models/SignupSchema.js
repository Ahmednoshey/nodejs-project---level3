const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const authuserSchema = new Schema({
  UserName: String,
  Email: String,
  Password: String,
  profileImage:String,
  Data_Info:[{
    Customer: String,
    price: Number,
    Bank: String,
    Branch: String,
    First_Date: String,
    Second_Date: String,
    Info: String,
    createdAt:Date,
    updatedAt:{ type: Date, default: Date.now },
  }]
});
authuserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
 });
const AuthUser = mongoose.model("User", authuserSchema);
module.exports = AuthUser;