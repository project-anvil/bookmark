import { boundary } from '../utils/boundary'
import { bookmark } from '../entities'

const writeBookmark = boundary(bookmark.write)
const readBookmarks = boundary(bookmark.read)

export const read = (req, res, next) =>
  readBookmarks().then(data => res.status(200).send(data))
    .catch(next)

export const write = (req, res, next) =>
  writeBookmark(req.body)
    .then(() => res.status(201).send())
    .catch(next)
