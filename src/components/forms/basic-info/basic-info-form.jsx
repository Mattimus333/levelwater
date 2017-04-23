import React from 'react';
import SignUpStep from '../sign-up-step';

const BasicInfoForm = () => (
  <div id="basic-info-form">
    <SignUpStep step="1" />
    <div className="ui grid">
      <div className="column sixteen wide">
        <h3>
          Before We Get Started, Please Provide Some Info About Your Water System
        </h3>
      </div>
    </div>

      <form id="step1">
        <div className="ui grid">
          <div className="column seven wide">
            <label>Your First Name:</label>
            <label>Your Last Name:</label>
            <label>Water System Name:</label>
            <label>PWS Number:</label>
            <label>Number Of Connections:</label>
            <label>Customer Population:</label>

          </div>
          <div className="column nine wide">
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </div>
        </div>
        <div id="basic-info-submit-button">
          <div className="ui grid">
            <div className="column four wide"></div>
            <div className="column twelve wide">
              <button type='submit' className="ui button">Continue To Revenue & Costs &gt;</button>
            </div>
          </div>
        </div>
      </form>
    </div>

);

export default BasicInfoForm;