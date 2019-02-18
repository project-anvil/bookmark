import bodyParser from 'body-parser'
import express, { Router } from 'express'
import morgan from 'morgan'

import logger from './utils/logger'
import { stackTraceMask } from './utils'

import { read, write } from './resource/bookmark'

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
app.use(stackTraceMask(logger))

app.post('/', write)
app.get('/', read)

app.listen(PORT)
