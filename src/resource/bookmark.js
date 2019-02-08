import { saveBookmark, readBookmarks } from '../boundary'

const readBookmarks = (req, res, next) =>
  readBookmarks().then(data => res.status(200).send(data)).catch(next)

export default bookmark = (req, res, next) =>
  saveBookmark(req.body)
    .then(() => res.status(201).send())
    .catch(next)
