// Implement form validation for a phone number input field. Ensure that the phone number entered is in a valid format (e.g.,
// xxx-xxx-xxxx) and display an error message if it's not"

import React, { useState } from 'react';

const PhoneForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    setPhoneNumber(inputValue);
    // Validate the phone number format
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    setIsValidPhoneNumber(phonePattern.test(inputValue));
  };

  return (
    <div>
        <h4>Q13. Implement form validation for a phone number input field. Ensure that the phone number entered is in a valid format (e.g.,xxx-xxx-xxxx) and display an error message if it's not"</h4>
      <h4>Phone Number Form</h4>
      <form>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label>
      </form>

      {!isValidPhoneNumber && (
        <p style={{ color: 'red' }}>Please enter a valid phone number (e.g., xxx-xxx-xxxx).</p>
      )}
    </div>
  );
};

export default PhoneForm;
