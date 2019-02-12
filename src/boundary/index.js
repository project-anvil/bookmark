import { bookmark } from '../entities'

export const boundary = (behavior, rules = [e => e]) => obj =>
  behavior(rules.reduce((acc, fn) => fn(acc), obj))

export const readBookmarks = () => bookmark.read()
export const saveBookmark = ({ key, url }) => bookmark.write({ key, url })
