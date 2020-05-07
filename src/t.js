export default (() => {
  let start = new Date().valueOf()
  let last = start
  const t = (s) => {
    const now = new Date().valueOf()
    console.log(s, now - last) // eslint-disable-line
    last = now
  }

  Object.assign(t, {
    reset: () => {
      start = new Date().valueOf()
    },
  })
})()
