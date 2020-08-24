import React from 'react'
import Form from '@unrest/react-jsonschema-form'
import RestHook from '@unrest/react-rest-hook'

import post from './post'

export const useSchema = RestHook('/api/schema/${form_name}/').use

export default function SchemaForm(props) {
  const { loading, makeUrl, schema } = useSchema(props)
  const onSubmit = (formData) => post(makeUrl(props), formData)
  if (loading && !schema) {
    return null
  }
  return (
    <Form
      {...props}
      schema={schema}
      onSubmit={onSubmit}
      className="max-w-3xl mx-auto mt-4"
    />
  )
}
