export const funct = (f) => {
  return typeof f === 'function' ? f() : f
}

export const assert = (bool, error) => {
  if (!funct(bool)) {
    throw funct(error)
  }
}
