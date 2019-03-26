export const boundary = (behavior, rules = [e => e]) => obj =>
  behavior(rules.reduce((acc, fn) => fn(acc), obj))

export const composer = (...fns) => obj => fns.reduce((acc, fn) => fn(acc), obj))
