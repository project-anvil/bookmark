import { bookmark } from '../entities'

export const saveBookmark = ({ body: { key = '', url = '' } }, res) =>
  bookmark.write({ key, url })
    .then(() => res.status(201).send())
    .catch(next)
