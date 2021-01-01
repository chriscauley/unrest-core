import React from 'react'
import Form from '@unrest/react-jsonschema-form'
import RestHook from '@unrest/react-rest-hook'

import post from './post'

const noop = (a) => a

export const useSchema = RestHook('/api/schema/${form_name}/').use

export default function SchemaForm({ prepSchema = noop, ...props }) {
  const { loading, makeUrl, schema } = useSchema(props)
  const onSubmit = (formData) => post(makeUrl(props), formData)
  if (loading && !schema) {
    return null
  }
  return (
    <Form
      schema={prepSchema(schema)}
      onSubmit={onSubmit}
      className="max-w-3xl mx-auto mt-4"
      {...props}
    />
  )
}
