const mongoose = require('mongoose')
const ComicBook = mongoose.model('ComicBook')

exports.get = async () => {
  const res = await ComicBook.find()
  return res
}

exports.getBySlug = async (slug) => {
  const res = await ComicBook
    .findOne({
      slug: slug
    }, 'title description pages slug read')
  return res
}

exports.getById = async (id) => {
  const res = await ComicBook
    .findById(id)
  return res
}

exports.getBySaga = async (saga) => {
  const res = ComicBook
    .find({
      saga: saga
    }, 'title description pages slug saga published_date published_id read')
  return res
}

exports.create = async (data) => {
  await ComicBook.create(data)
}

exports.update = async (id, data) => {
  await ComicBook
    .findByIdAndUpdate(id, {
      $set: {
        title: data.title,
        description: data.description,
        pages: data.pages,
        slug: data.slug,
        saga: data.saga,
        read: data.read,
        publisher_id: data.publisher_id,
        published_date: data.published_date,
      }
    })
}

exports.delete = async (id) => {
  await ComicBook
    .findOneAndRemove(id)
}