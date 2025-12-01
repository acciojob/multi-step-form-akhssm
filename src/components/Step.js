import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div className="form-card">
      {step === 1 && (
        <>
          <h2>Customer Details</h2>

          <label>First Name:</label>
          <input
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter first name"
          />

          <label>Last Name:</label>
          <input
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </>
      )}

      {step === 2 && (
        <>
          <h2>Car Details</h2>

          <label>Car Model:</label>
          <input
            id="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Enter car model"
          />

          <label>Car Price:</label>
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
            placeholder="Enter car price"
          />
        </>
      )}

      {step === 3 && (
        <>
          <h2>Payment Details</h2>

          <label>Card Number:</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
            placeholder="Enter card info"
          />

          <label>Expiry Date:</label>
          <input
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            placeholder="MM/YY"
          />
        </>
      )}

      <div className="button-group">
        {step > 1 && (
          <button onClick={prevStep} className="nav-btn">
            Previous
          </button>
        )}

        {step < 3 && (
          <button onClick={nextStep} className="nav-btn">
            Next
          </button>
        )}

        {step === 3 && (
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;
