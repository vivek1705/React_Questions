// Implement real-time validation for an email input field. Display a green checkmark icon
// next to the input when the entered email is valid and a red X icon when it's invalid.

import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    // Validate the email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(inputValue));
  };

  return (
    <div>
        <h4>Q14. Implement real-time validation for an email input field. Display a green checkmark icon
            next to the input when the entered email is valid and a red X icon when it's invalid. </h4>
      <h4>Email Form</h4>
      <form>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          {isValidEmail ? (
            <span style={{ color: 'green' }}>✓</span>
          ) : (
            <span style={{ color: 'red' }}>✗</span>
          )}
        </label>
      </form>

      {!isValidEmail && (
        <p style={{ color: 'red' }}>Please enter a valid email address.</p>
      )}
    </div>
  );
};

export default EmailForm;
