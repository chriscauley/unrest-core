import React from 'react'
import { Link } from 'react-router-dom'
import { useSelect } from './hooks'
import css from '@unrest/css'

const DropdownLink = ({ disabled, badge, children, ...props }) => {
  let Tag = props.to ? Link : 'a'
  if (disabled) {
    Tag = 'div'
    delete props.onClick
  }
  return (
    <Tag className={css.dropdown.item({ disabled })} {...props}>
      {children}
      {badge ? <span className={css.badge.danger()}>{badge}</span> : null}
    </Tag>
  )
}

const prepLink = (link) =>
  typeof link === 'string' ? { children: link } : link

export default function Dropdown(props) {
  const { open, toggle, toggleRef, childRef } = useSelect()
  const { user, badge, links = [], children, className, title } = props
  const funct = (value) => (typeof value === 'function' ? value(user) : value)
  const _badge = funct(badge, badge)
  return (
    <div className={css.dropdown.outer()}>
      <div
        className={css.dropdown.toggle(className)}
        onClick={toggle}
        ref={toggleRef}
      >
        {title}
        {badge ? <span className={css.badge.danger()}>{badge}</span> : null}
      </div>
      <div className={css.dropdown.menu(open ? 'block' : 'hidden')}>
        {children && <div ref={childRef}>{children}</div>}
        {links.map((link, i) => (
          <DropdownLink {...prepLink(link)} key={i} />
        ))}
      </div>
    </div>
  )
}
