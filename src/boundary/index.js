export const boundary = (behavior, rules = [e => e]) => obj =>
  behavior(rules.reduce((acc, fn) => fn(acc), obj))
