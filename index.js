export default ({boundary, logger, entityMaper}) => {
  const {read, write} = entityMapper.define('bookmark', ['key', 'url'])

  return {
    read,
    write
  };
};
