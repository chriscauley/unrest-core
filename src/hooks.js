import React from 'react'

// designed to work like <select> element, this triggers open=false when any non-ref'd element is clicked
export const Select = () => {
  const refs = {}
  const getRef = (key) => {
    if (!refs[key]) {
      refs[key] = React.createRef()
    }
    return refs[key]
  }

  return () => {
    const [open, setOpen] = React.useState(false)
    React.useEffect(() => {
      const close = (e) => {
        if (open) {
          const keys = Object.keys(refs)
          for (let i=0;i<keys.length;i++) {
            const current = refs[keys[i]].current
            if (current) {
              if (current === e.target || current.contains(e.target)) {
                return
              }
            }
          }
          setOpen(false)
        }
      }
      document.addEventListener('click', close)
      return () => {
        document.removeEventListener('click', close)
      }
    })
    return [open, setOpen, getRef]
  }
}

export default {
  Select
}