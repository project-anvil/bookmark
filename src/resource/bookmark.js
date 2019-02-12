import { saveBookmark, readBookmarks, boundary } from '../boundary'

export const retrieve = (req, res, next) =>
  readBookmarks().then(data => res.status(200).send(data))
    .catch(next)

export const bookmark = (req, res, next) =>
  saveBookmark(req.body)
    .then(() => res.status(201).send())
    .catch(next)
