import bodyParser from 'body-parser'
import express, { Router } from 'express'
import morgan from 'morgan'

import logger from './utils/logger'
import { stackTraceMask, catchAsyncFailure } from './utils'

import { resources } from './resource/bookmark'

const { PORT = 80 } = process.env

const app = express()

const makeRouter = behaviors => {
  const router = Router()
  behaviors.forEach(({endpoint, method, behavior}) => {
    router[method](endpoint, behavior)
  })
  return router
}

app.use(morgan('combined', { stream: logger.stream }))
app.use(bodyParser.json())

resources.forEach(({ resource, behaviors }) =>
  app.use(resource, makeRouter(behaviors)))

app.use((req, res, next) => next({status: 404}))

app.use(stackTraceMask(logger))

app.listen(PORT)
