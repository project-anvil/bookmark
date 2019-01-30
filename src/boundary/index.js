import { bookmark } from '../entities'

export default saveBookmark = ({ key, url }) => bookmark.write({ key, url })
