ARG VERSION=3.8

FROM alpine:$VERSION as build

WORKDIR /app

COPY . /app

RUN apk update && apk add npm nodejs
RUN npm install && npm run build

FROM alpine:$VERSION

WORKDIR /app

COPY --from=build /app/build /app

ENV NODE_ENV production
ENV PORT 80

RUN apk update && apk add nodejs

EXPOSE 80

CMD ["node", "bundle.js"]
