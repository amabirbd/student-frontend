import { useFormik } from 'formik';
import React, { useReducer } from 'react'

const AddStudent: React.FC = () => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


    interface studentFormValues {
        name: string,
        address: string,
        email: string,
        password: string
    }

    const initialValues: studentFormValues = { name: '', address: '', email: '', password: ''}


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          fetch("http://localhost:3333/students",{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(values) // body data type must match "Content-Type" header
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            forceUpdate();
          })
          
        }
      });

      return (
        <div className='add_students'>
          <h3>Add Students</h3>
          <form onSubmit={formik.handleSubmit} className="add_student_form">
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        <label htmlFor="address">address</label>
          <input
            id="address"
            name="address"
            type="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
    
          <button type="submit" className='submit_btn'>Submit</button>
        </form>
        </div>
      );
}

export default AddStudent