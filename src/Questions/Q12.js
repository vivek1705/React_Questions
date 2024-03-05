// Create a form with a checkbox input for "subscribe to newsletter." Implement a controlled component for the checkbox and
// display a confirmation message when the checkbox is checked"

import React, { useState } from 'react';

const NewsletterForm = () => {
  const [subscribe, setSubscribe] = useState(false);

  const handleCheckboxChange = (e) => {
    setSubscribe(e.target.checked);
  };

  return (
    <div>
        <h4>Q12. Create a form with a checkbox input for "subscribe to newsletter." Implement a controlled component for the checkbox and
        display a confirmation message when the checkbox is checked"</h4>
      <h4>Subscribe to Newsletter</h4>
      <form>
        <label>
          <input
            type="checkbox"
            checked={subscribe}
            onChange={handleCheckboxChange}
          />
          Subscribe to Newsletter
        </label>
      </form>

      {subscribe && <p>Thank you for subscribing to our newsletter!</p>}
    </div>
  );
};

export default NewsletterForm;
