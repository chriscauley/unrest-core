import React from 'react'
import Form from '@unrest/react-jsonschema-form'
import RestHook from '@unrest/react-rest-hook'

import post from './post'

const noop = (a) => a

const hook = RestHook('/api/schema/${form_name}/')

export const useSchema = hook.use

export default function SchemaForm({
  prepSchema = noop,
  onSuccess = noop,
  ...props
}) {
  const { loading, makeUrl, schema, clearData } = useSchema(props)
  const onSubmit = (formData) => post(makeUrl(props), formData)
  if (loading && !schema) {
    return null
  }
  return (
    <Form
      schema={prepSchema(schema)}
      onSubmit={onSubmit}
      onSuccess={(data) => {
        setTimeout(() => clearData(props))
        return onSuccess(data)
      }}
      className="max-w-3xl mx-auto mt-4"
      {...props}
    />
  )
}
