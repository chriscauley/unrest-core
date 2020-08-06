import React from 'react'
import { Dropdown } from '../src'

export default function DropdownDemo() {
  const links = [
    'woo',
    { children: 'hoo', href: 'boo'},
  ]
  return <Dropdown links={links} title="dropdown" />
}