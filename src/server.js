import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'

import logger from './utils/logger'
import { stackTraceMask } from './utils'

const { PORT = 80 } = process.env

const app = express()

app.use(morgan('combined', { stream: logger.stream }))
app.use(bodyParser.json())
app.use(stackTraceMask(logger))

app.listen(PORT)
