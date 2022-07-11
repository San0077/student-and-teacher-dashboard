import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const formValid= yup.object({
  email:yup.string().required("").min(9,"email must strong"),
  password:yup.string().required("").min(5,"password must match")
})
export function Basic() {
  const form = useFormik({
    initialValues:{email:'santho',password:"snalthls"},
    validationSchema:formValid,
    onSubmit:(values)=>{
        console.log(values)
    }
  });
  return (
    <form onSubmit={form.handleSubmit} className='form'>
      <input  value={form.values.email} name="email" 
      onChange={form.handleChange}
      onBlur={form.handleBlur}></input>
          {form.errors.email && form.touched.email ? form.errors.email:""}      
           <br/>
      <input  name="password" 
      
      onChange={form.handleChange} 
      onBlur={form.handleBlur}
       
      >
        </input>
      {form.errors.password && form.touched.password ? form.errors.password:""}
      {JSON.stringify(form.values)}
      {JSON.stringify(form.touched)}
      <button type="submit">submit</button>

    </form>
  );
}
