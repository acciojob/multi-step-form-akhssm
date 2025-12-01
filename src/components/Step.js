import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <>
      {step === 1 && (
        <div id="step1">
          <h2>Customer Details</h2>

          <label>First Name:</label>
          <input
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <div className="button-group">
            <button className="nav-btn" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <h2>Car Details</h2>

          <label>Car Model:</label>
          <input
            id="model"
            value={formData.model}
            onChange={handleChange}
          />

          <label>Car Price:</label>
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
          />

          <div className="button-group">
            <button className="nav-btn" onClick={prevStep}>Previous</button>
            <button className="nav-btn" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <h2>Payment Details</h2>

          <label>Card Info:</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
          />

          <label>Expiry Date:</label>
          <input
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
          />

          <div className="button-group">
            <button className="nav-btn" onClick={prevStep}>Previous</button>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Step;
