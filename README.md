# bookmark
a small service for saving links

# Running the service locally

1. Create the database

```sh
$ git clone https://github.com/project-anvil/bookmark.git && cd bookmark
$ echo schema/schema.sql | sqlite3 bookmark.db
```

2. Start the container with the database

```sh
$ docker build -t bookmark .
$ docker run --rm -v bookmark.db:/app/bookmark.db -p 3000:80 -d bookmark
```
