import React from 'react'
import { Link } from 'react-router-dom'
import css from '@unrest/css'

const DropdownLink = ({ badge, children, ...props }) => {
  const Tag = props.to ? Link : 'a'
  return (
    <Tag className={css.dropdown.item()} {...props}>
      {children}
      {badge ? <span className={css.badge.danger()}>{badge}</span> : null}
    </Tag>
  )
}

const prepLink = (link) =>
  typeof link === 'string' ? { children: link } : link

class Dropdown extends React.Component {
  state = {}
  toggle = () => this.setState({ open: !this.state.open })

  componentDidMount() {
    this.ref = React.createRef()
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentWillUnmount() {
    this.mounted = false
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleDocumentClick = (event) => {
    const should_close =
      !this.ref.current.contains(event.target) || event.target.href
    if (this.state.open && should_close) {
      this.setState({ open: false })
    }
  }

  render() {
    const { user, badge, links = [], children, className, title } = this.props
    const funct = (value) => (typeof value === 'function' ? value(user) : value)
    const _badge = funct(badge, badge)
    return (
      <div className={css.dropdown.outer()} ref={this.ref}>
        <div className={css.dropdown.toggle(className)} onClick={this.toggle}>
          {title}
          {badge ? <span className={css.badge.danger()}>{badge}</span> : null}
        </div>
        <div
          className={css.dropdown.menu(this.state.open ? 'block' : 'hidden')}
        >
          {children}
          {links.map((link, i) => (
            <DropdownLink {...prepLink(link)} key={i} />
          ))}
        </div>
      </div>
    )
  }
}

export default Dropdown
