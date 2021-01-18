const WARNED = {}
export const warnOnce = (s) => {
  if (!WARNED[s]) {
    console.warn(s)
    WARNED[s] = true
  }
}

export const funct = (f) => {
  warnOnce('Depracation Warning: funct should be resolveCallable')
  return resolveCallable(f)
}

export const resolveCallable = (f) => (typeof f === 'function' ? f() : f)

export const assert = (bool, error) => {
  if (!funct(bool)) {
    throw funct(error)
  }
}

export const noop = (a) => a
