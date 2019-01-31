import { saveBookmark } from '../boundary'

export default bookmark = (req, res, next) =>
  saveBookmark(req.body)
    .then(() => res.status(201).send())
    .catch(next)
