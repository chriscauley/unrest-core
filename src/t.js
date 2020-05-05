export default (() => {
  const start = new Date().valueOf()
  let last = start
  const t = (s) => {
    const now = new Date().valueOf()
    last = now
  }

  Object.assign(t, {
    reset: () => { start = new Date().valueOf() }
  })
})()