import React from 'react'
import {ErrorMessage, useField} from 'formik'


function TextField({label, ...props}) {

  const [field, meta] = useField(props)

  return (
    <div className='my-3'>

        <label htmlFor={field.name}>{label}</label>
        <input 
        type="text" 
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props} />
        <ErrorMessage name={field.name} />

    </div>
  )
}

export default TextField
