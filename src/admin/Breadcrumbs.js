import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import css from '@unrest/css'

export default function Breadcrumbs({ current, parts }) {
  if (!parts) {
    parts = useLocation().pathname.split('/').filter(Boolean)
  }
  if (!current) {
    current = parts.pop()
  }
  return (
    <div className="flex">
      <span className="mx-2"> / </span>
      {parts.map((p, i) => (
        <span key={p}>
          <Link
            className={css.link()}
            to={`/${parts.slice(0, i + 1).join('/')}/`}
          >
            {p}
          </Link>
          <span className="mx-2"> / </span>
        </span>
      ))}
      {current}
    </div>
  )
}
