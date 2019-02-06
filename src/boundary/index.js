import { bookmark } from '../entities'

const writeBoundary = (controller, rules = [e => e]) => obj =>
  controller.write(rules.reduce((acc, fn) => (fn(acc)), obj))

export default saveBookmark = ({ key, url }) => bookmark.write({ key, url })
