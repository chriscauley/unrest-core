import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import SelectDemo from './SelectDemo'
import {alert} from '../src'
import Nav from './Nav'

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <div className="app-content">
        <SelectDemo/>
        <alert.List />
      </div>
    </HashRouter>
  )
}

const domContainer = document.querySelector('#react-app')
ReactDOM.render(<App />, domContainer)