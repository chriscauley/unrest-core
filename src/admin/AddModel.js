import React from 'react'
import { useHistory } from 'react-router-dom'
import { alert, SchemaForm } from '@unrest/core'

import Breadcrumbs from './Breadcrumbs'
import { pascalCase, titleCase } from './utils'

export default function AddModel({ match }) {
  const history = useHistory()
  const { model_name } = match.params
  const { success } = alert.use()
  const onSuccess = ({ id }) => {
    success(`${titleCase(model_name)} created you can now edit it below`)
    history.push(`/admin/user/edit/${id}/`)
  }
  return (
    <div className="p-4">
      <div className="mb-4">
        <Breadcrumbs parts={['admin', 'user']} current={`add ${model_name}`} />
      </div>
      <SchemaForm
        form_name={`Admin${pascalCase(model_name)}Form`}
        onSuccess={onSuccess}
      />
    </div>
  )
}
