const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: Number,
    },
  },
  {
    collection: 'user',
  },
);

module.exports = mongoose.model('user', studentSchema);
