import React from 'react'

// designed to work like <select> element, this triggers open=false when any non-ref'd element is clicked
export const useSelect = () => {
  const [open, setOpen] = React.useState(false)
  const toggleRef = React.useRef()
  const childRef = React.useRef()
  const toggle = () => setOpen(!open)
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
  return {open, setOpen, toggle, toggleRef, childRef}
}

export const useAutoScroll = ({behavior = 'smooth', block = 'end'} = {}) => {
  const ref = React.useRef()
  const [{ enabled, first }, setState] = React.useState({
    enabled: true,
    first: false,
  })
  const e = ref.current
  const scroll = () => {
    if (!first) {
      e.scrollIntoView({ block })
    } else {
      e.scrollIntoView({ behavior, block })
    }
  }
  e && enabled && setTimeout(scroll, 0)
  const onScroll = ({ target }) => {
    const { scrollHeight, scrollTop, clientHeight } = target
    const new_enabled = scrollHeight === scrollTop + clientHeight
    if (!first || new_enabled !== enabled) {
      setState({ enabled: new_enabled, first: true })
    }
  }
  return { enabled, ref, onScroll }
}

export default {
  useAutoScroll,
  useSelect,
}