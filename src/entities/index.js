import config from '../../config.json'
import entityMap from '../utils/entityMap'

const entityMapper = entityMap(config)

export const bookmark = entityMapper.define('bookmark', ['key', 'url'])
