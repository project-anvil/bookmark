import createError from 'http-errors'

export const stackTraceMask = logger => (error, req, res, next) => {
  logger.error(error)
  const { status, message } = createError(error.status || 500)
  res.status(status).json({ message })
}

const catchAsyncFailure = behavior => async (req, res, next) => {
  try { await behavior(req, res, next) }
  catch(e) { next(e) }
}
