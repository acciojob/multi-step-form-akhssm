import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <>
      {step === 1 && (
        <div id="step1">
          <h2>Customer Details</h2>

          <label>First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <div className="button-group">
            <button
              type="button"
              className="nav-btn"
              onClick={nextStep}
              id="next-step1"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <h2>Car Details</h2>

          <label>Car Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />

          <label>Car Price:</label>
          <input
            type="text"
            id="car_price"
            name="car_price"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />

          <div className="button-group">
            <button type="button" className="nav-btn" onClick={prevStep}>
              Previous
            </button>
            <button type="button" className="nav-btn" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <h2>Payment Details</h2>

          <label>Card Info:</label>
          <input
            type="text"
            id="card_info"
            name="card_info"
            placeholder="Card Info"
            value={formData.card_info}
            onChange={handleChange}
          />

          <label>Expiry Date:</label>
          <input
            type="text"
            id="expiry_date"
            name="expiry_date"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />

          <div className="button-group">
            <button type="button" className="nav-btn" onClick={prevStep}>
              Previous
            </button>
            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Step;
