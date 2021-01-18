import React from 'react'
import Form from '@unrest/react-jsonschema-form'
import RestHook from '@unrest/react-rest-hook'

import { noop } from './utils'
import post from './post'

const hook = RestHook('/api/schema/${form_name}/')

export const useSchema = hook.use

export default function SchemaForm({
  prepSchema = noop,
  onSuccess = noop,
  ...props
}) {
  const { loading, makeUrl, schema, setData } = useSchema(props)
  const onSubmit = (formData) => post(makeUrl(props), formData)
  if (loading && !schema) {
    return null
  }
  return (
    <Form
      schema={prepSchema(schema)}
      onSubmit={onSubmit}
      onSuccess={(data) => {
        setData(data)
        return onSuccess(data)
      }}
      className="max-w-3xl mx-auto mt-4"
      {...props}
    />
  )
}
