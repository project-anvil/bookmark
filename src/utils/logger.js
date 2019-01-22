import { createLogger, format, transports } from 'winston'

const output = ({ level, message }) => `
  ⌈ ${level} ⌋ ⟹   ${new Date().toString()}
  ⟹   ${message}
`

const logger = createLogger({
  exitOnError: false,
  format: format.combine(
    format.printf(output)
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'data.log',
      level: 'info'
    })
  ]
})

logger.stream = {
  write: message => {
    logger.info(message)
  }
}

export default logger
