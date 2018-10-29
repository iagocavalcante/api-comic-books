'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'O slug é obrigatório'],
    trim: true,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  read: {
    type: Boolean,
    required: true,
    default: true
  },
  saga: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  publisher_id: {
    type: String,
    required: true,
    trim: true
  },
  published_date: {
    type: Date,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('ComicBook', schema)