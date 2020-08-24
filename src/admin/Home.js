import React from 'react'
import { Link } from 'react-router-dom'

import { titleCase } from './utils'
import register from './register'

export default function Home() {
  return (
    <div>
      <h1>Admin</h1>
      <table className="table table-striped w-full">
        <tbody>
          {register.models.map(({ model_name }) => (
            <tr key={model_name}>
              <td>
                <Link to={`/admin/${model_name}/`}>
                  {titleCase(model_name)}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
