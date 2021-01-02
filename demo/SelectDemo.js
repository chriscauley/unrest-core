import React from 'react'
import css from '@unrest/css'

import { alert, useSelect } from '../src'

export default function SelectDemo(props) {
  const [open, setOpen, getRef] = useSelect()
  const [count, setCount] = React.useState(0)
  const {success} = alert.use()

  const clickCount = () => {
    setCount(count + 1)
    success("Clicking that doesn't close the select because it's a registered ref")
  }

  return (
    <div className={css.dropdown.outer()}>
      <div className={css.dropdown.toggle()} onClick={() => setOpen(!open)} ref={getRef('trigger')}>
        Woo!
      </div>
      <div
        className={css.dropdown.menu(open ? 'block' : 'hidden')}
      >
        <div className={css.dropdown.item()} onClick={() => success('you clicked hello')}>
          Hello!
        </div>
        <div className={css.dropdown.item()} onClick={clickCount} ref={getRef('clicker')}>
          This has been clicked {count} times
        </div>
      </div>
    </div>
  )
}