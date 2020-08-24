import React from 'react'
import { Route } from 'react-router-dom'
import auth from '@unrest/react-auth'

import AddModel from './AddModel'
import Home from './Home'
import ListModel from './ListModel'
import EditModel from './EditModel'

function AdminRoute({ component, ...props }) {
  component = auth.required(component, { roles: ['admin'] })
  return <Route component={component} {...props} />
}

export default function AdminRoutes() {
  return (
    <>
      <AdminRoute exact component={Home} path={'/admin/'} />
      <AdminRoute exact component={ListModel} path={'/admin/:model_name/'} />
      <AdminRoute component={AddModel} path={'/admin/:model_name/add/'} />
      <AdminRoute component={EditModel} path={'/admin/:model_name/edit/:id/'} />
    </>
  )
}
