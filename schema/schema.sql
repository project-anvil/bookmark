CREATE TABLE bookmark (
  key TEXT NOT NULL,
  url TEXT NOT NULL,
  date_created INTEGER DEFAULT (strftime('%s', 'now'))
);
