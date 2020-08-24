import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Pagination } from '@unrest/core'
import css from '@unrest/css'
import RestHook from '@unrest/react-rest-hook'

import Breadcrumbs from './Breadcrumbs'
import register from './register'

const api = RestHook('/api/admin/${model_name}/${search}')

const ObjectList = function ObjectList(props) {
  const { model_name, list_display } = props
  const { search } = useLocation()
  const { items = [], ...apiProps } = api.use({ model_name, search })
  return (
    <div className="max-w-xl mx-auto mb-4">
      <table className="table table-striped w-full">
        <thead>
          <tr>
            <th />
            {list_display.map((attr) => (
              <th key={attr}>{attr}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <Link
                  to={`/admin/${model_name}/edit/${item.id}/`}
                  className={css.link('fa fa-edit')}
                />
              </td>
              {list_display.map((attr) => (
                <td key={attr}>{item[attr]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination {...apiProps} />
    </div>
  )
}

export default function ListModel({ match }) {
  const { model_name } = match.params
  const { list_display, can_add } = register.getModel(model_name)
  return (
    <div>
      <div className="my-4 flex justify-between items-center">
        <Breadcrumbs />
        {can_add && (
          <Link to={`/admin/${model_name}/add/`} className={css.button()}>
            <i className={'fa fa-plus mr-2'} />
            New {model_name}
          </Link>
        )}
      </div>
      <ObjectList model_name={model_name} list_display={list_display} />
    </div>
  )
}
