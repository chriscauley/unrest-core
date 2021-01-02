import React from 'react'
import { alert, post, SchemaForm } from '@unrest/core'
import css from '@unrest/css'
import RestHook from '@unrest/react-rest-hook'

import Breadcrumbs from './Breadcrumbs'
import { pascalCase } from './utils'

const api = RestHook('/api/admin/${model_name}/${id}/preview_delete/')

function ConfirmDelete({ model_name, id, cancel, history }) {
  const { records = {} } = api.use({ model_name, id })
  const url = `/api/admin/${model_name}/${id}/delete/`
  const { success } = alert.use()
  const afterDelete = () => {
    success(`${model_name} deleted!`)
    history.replace('../..')
  }
  const doDelete = () => post(url).then(afterDelete)
  return (
    <div className={css.modal.outer()}>
      <div className={css.modal.mask()} onClick={cancel} />
      <div className={css.modal.content()}>
        <div className={css.h2()}>Confirm Delete</div>
        <div>
          <p>
            Deleting this object will delete all of the following. Are you sure?
          </p>
          <div className="mb-4">
            {Object.entries(records).map(([name, items]) => (
              <div key={name} className="mb-2">
                <div className={css.h5()}>{name}</div>
                {items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button className={css.button.light()} onClick={cancel}>
            Cancel
          </button>
          <button className={css.button.danger()} onClick={doDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

function DeleteObject({ model_name, id, history }) {
  const [pending, set] = React.useState(false)
  return (
    <>
      {pending && (
        <ConfirmDelete
          cancel={() => set(false)}
          {...{ history, model_name, id }}
        />
      )}
      <div className={css.button.danger()} onClick={() => set(true)}>
        <i className="fa fa-trash mr-2" />
        Delete
      </div>
    </>
  )
}

export default function EditUser({ match, history }) {
  const { model_name, id } = match.params
  const { success } = alert.use()
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <Breadcrumbs current={`edit ${model_name}`} parts={['admin', 'user']} />
        <DeleteObject model_name={model_name} id={id} history={history} />
      </div>

      <SchemaForm
        form_name={`Admin${pascalCase(model_name)}Form/${id}`}
        onSuccess={() => success('Changes saved.')}
      />
    </div>
  )
}
