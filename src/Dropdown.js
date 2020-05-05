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

const ref = React.createRef(null)

const prepLink = (link) =>
  typeof link === 'string' ? { children: link } : link

class Dropdown extends React.Component {
  state = {}
  toggle = () => this.setState({ open: !this.state.open })

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentWillUnmount() {
    this.mounted = false
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleDocumentClick = (event) => {
    if (this.state.open && event.target !== ref.current) {
      this.setState({ open: false })
    }
  }

  render() {
    const { user, badge, links = [], children, className } = this.props
    const funct = (value) => (typeof value === 'function' ? value(user) : value)
    const _badge = funct(badge, badge)
    return (
      <div className={css.dropdown.outer()}>
        <div
          className={css.dropdown.toggle(className)}
          onClick={this.toggle}
          ref={ref}
        >
          {children}
          {badge ? <span className={css.badge.danger()}>{badge}</span> : null}
        </div>
        <div
          className={css.dropdown.shelf(this.state.open ? 'block' : 'hidden')}
        >
          {links.map((link, i) => (
            <DropdownLink {...prepLink(link)} key={i} />
          ))}
        </div>
      </div>
    )
  }
}

export default Dropdown
