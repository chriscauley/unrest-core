import React from 'react'
import css from '@unrest/css'

export default function Modal({ close, children, title }) {
  return (
    <div className={css.modal.outer()}>
      <div className={css.modal.mask()} onClick={close} />
      <div className={css.modal.content()}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  )
}
