import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div>

      {step === 1 && (
        <div id="step1">
          <h2>Customer Details</h2>

          <input
            id="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <input
            id="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <h2>Car Details</h2>

          <input
            id="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />

          <input
            id="car_price"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />

          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <h2>Payment Details</h2>

          <input
            id="card_info"
            placeholder="Card Info"
            value={formData.card_info}
            onChange={handleChange}
          />

          <input
            id="expiry_date"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />

          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Step;
