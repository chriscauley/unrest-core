import React from 'react'
import { Link } from 'react-router-dom'
import css from '@unrest/css'

const PLink = ({ active, ...props }) => {
  const Tag = active ? Link : 'span'
  if (active) {
    props.className = css.link()
  }
  return <Tag {...props} />
}

export default function Pagination({ page, pages, next_page, prev_page }) {
  return (
    <div className="flex justify-between">
      <PLink to={`?page=${page - 1}`} active={prev_page}>
        Previous
      </PLink>
      <div>
        Page {page} of {pages}
      </div>
      <PLink to={`?page=${next_page}`} active={next_page}>
        Next
      </PLink>
    </div>
  )
}
