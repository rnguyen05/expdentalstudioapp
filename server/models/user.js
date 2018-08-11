const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  phoneone: {
    type: String,
    required: true
  },
  phonetwo: {
    type: String,
    required: false
  },
  addrone: {
    type: String,
    require: true
  },
  addrtwo: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  addrstate: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
