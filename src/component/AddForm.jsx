import React, { useState } from 'react';
import './addform.css';
import { useFormik } from 'formik';
import { SignUpSchema } from '../validation/index';

const AddForm = ({ handleFormSubmit, selectedContact }) => {
  const initialValues = selectedContact || {
    name: '',
    email: '',
    PhoneNumber: '',
    Address: '',
  };

  const onSubmit = (values) => {
    handleFormSubmit(values);
    resetForm();
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    onSubmit,
  });

  return (
    
    <div className="form">
      <div className="registration-container">
        <h1>{selectedContact ? 'Edit Contact' : 'Add Contact'}</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <div className="input-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.name && touched.name && <p>{errors.name}</p>}
          <label htmlFor="email">Email</label>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email && <p>{errors.email}</p>}
          <label htmlFor="PhoneNumber">PhoneNumber</label>
          <div className="input-group">
            <input
              type="PhoneNumber"
              id="PhoneNumber"
              name="PhoneNumber"
              placeholder="Enter your PhoneNumber"
              value={values.PhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.PhoneNumber && touched.PhoneNumber && <p>{errors.PhoneNumber}</p>}
          <label htmlFor="Address">Address</label>
          <div className="input-group">
            <input
              type="Address"
              id="Address"
              name="Address"
              placeholder="Address"
              value={values.Address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.Address && touched.Address && <p>{errors.Address}</p>}
          <div id='btn'>
            <button type="submit">{selectedContact ? 'Update' : 'Submit'}</button>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default AddForm;