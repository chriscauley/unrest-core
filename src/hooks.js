import React from 'react'

export const useLocalStorage = (key, initial) => {
  // Save any json serializable object in localStorage to persist between reloads
  const saved = localStorage.getItem(key)
  const [value, set] = React.useState(
    saved === null ? initial : JSON.parse(saved),
  )
  const save = (new_value) => {
    localStorage.setItem(key, JSON.stringify(new_value))
    set(new_value)
  }
  return [value, save]
}

// designed to work like <select> element, this triggers open=false when any non-ref'd element is clicked
export const useSelect = () => {
  const [open, setOpen] = React.useState(false)
  const toggleRef = React.useRef()
  const childRef = React.useRef()
  const toggle = () => setOpen(!open)
  React.useEffect(() => {
    const close = (event) => {
      if (open && document.body.contains(event.target)) {
        const refs = [toggleRef.current, childRef.current]
        if (!refs.find((el) => el && el.contains(event.target))) {
          setOpen(false)
        }
      }
    }
    document.addEventListener('click', close)
    return () => {
      document.removeEventListener('click', close)
    }
  }, [open])
  return { open, setOpen, toggle, toggleRef, childRef }
}

export const useAutoScroll = ({ behavior = 'smooth', block = 'end' } = {}) => {
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
