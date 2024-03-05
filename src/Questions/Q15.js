//form with validations 
import React, { useState } from 'react';

const FormWithValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const validateName = () => {
    if (!formData.name.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name is required',
      }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address',
      }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  const validatePhoneNumber = () => {
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!formData.phoneNumber.trim() || !phonePattern.test(formData.phoneNumber)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'Please enter a valid phone number (e.g., xxx-xxx-xxxx)',
      }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
    }
  };

  const validatePassword = () => {
    if (formData.password.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters long',
      }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
        <h4>Q15. Form With Validations.</h4>
      <h4>Form with Validation</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onBlur={validateName}
              onChange={handleInputChange}
            />
            <p style={{ color: 'red' }}>{formErrors.name}</p>
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onBlur={validateEmail}
              onChange={handleInputChange}
            />
            <p style={{ color: 'red' }}>{formErrors.email}</p>
          </label>
        </div>

        <div>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onBlur={validatePhoneNumber}
              onChange={handleInputChange}
            />
            <p style={{ color: 'red' }}>{formErrors.phoneNumber}</p>
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onBlur={validatePassword}
              onChange={handleInputChange}
            />
            <p style={{ color: 'red' }}>{formErrors.password}</p>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormWithValidation;
