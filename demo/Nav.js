import React from 'react'
import { Link } from 'react-router-dom'
import css from '@unrest/css'

export default function Nav() {
  return (
    <header className={css.nav.outer()}>
      <section>
        <Link to="/" className={css.nav.brand()}>
          Home
        </Link>
      </section>
    </header>
  )
}