const { Schema, model } = require('mongoose')

const schema = new Schema({
  name1: {
    type: String,
    required: true
  },
  phnone1: {
    type: String,
    default: true
  }
})

module.exports = model('Todo', schema)