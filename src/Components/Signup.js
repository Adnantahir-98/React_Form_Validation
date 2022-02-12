import React from 'react'
import { Formik, Form } from 'formik'
import TextField from './TextField'
import * as Yup from 'yup'


function Signup() {

  const validate = Yup.object({
    firstName: Yup.string()
    .max(25, "Must be 25 characters or less")
    .required('Required'),
    lastName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required('Required'),
    email: Yup.string()
    .email("Email is Invalid")
    .required('Email is required'),
    password: Yup.string()
    .min(6, "Password Must be 6 characters at least")
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), 'Password must match'])
    .required('Confirm Password is required'),
  })

  return (
    <Formik
      initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={ values => {
        console.log(values)
      }}>
        
        {formik => (
          <div>
            {/* {console.log(formik.values)} */}
            <Form>
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="Last Name" name="lastName" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              <TextField label="Confirm Password" name="confirmPassword" type="password" />
              <button className="btn btn-outline-success me-2" type='submit'>Sign up</button>

            </Form>
          </div>
        )}
          
    </Formik>

  )
}

export default Signup
