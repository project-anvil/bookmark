export default ({boundary, logger, entityMaper}) => {
  const bookmark = entityMapper.define('bookmark', ['key', 'url'])

  const writeBookmark = boundary(bookmark.write)
  const readBookmarks = boundary(bookmark.read)

  const read = (req, res, next) =>
    readBookmarks().then(data => res.status(200).send(data))
      .catch(next)

  const write = (req, res, next) =>
    writeBookmark(req.body)
      .then(() => res.status(201).send())
      .catch(next)

  return [
    { resource: "/bookmarks",
      behaviors: [
        {endpoint: "/", method: "get", behavior: read},
        {endpoint: "/", method: "post", behavior: write}
      ]
    }
  ];
};
