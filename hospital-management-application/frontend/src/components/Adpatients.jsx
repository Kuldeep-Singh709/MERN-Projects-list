import React, { useState } from "react";
import "../Css/Adpatients.css";
import { useDispatch } from "react-redux";
import { addPatient } from "../asyncSlices/patients/patientSlice";



const Adpatients = () => {
  const [patientData, setPatientData] = useState({
    patientName: "",
    patientAge: "",
    patientCondition: "",
    admissionType: "",
    patientDOA: "",
    patientAddmissionReason: "",
    patientContact: "",
    patientEmergencyContactName: "",
    patientEmergencyContactNumber: "",
    patientDOB: "",
    patientGender: "",
    patientBloodGroup: "",
    patientTotalFees: "",
    patientAdvancePayment: "",
    patientMedicalHistory: "",
    patientAddress: "",
    isHasInsurance: "",
    isBedAlloted: false,
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPatientData({
      ...patientData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/auth/patientregister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(patientData),
        }
      );

      const data = await response.json();
      console.log("Data :", data);

      if (response.ok) {
        setResponseMessage("Patient registered successfully!");
      } else {
        setResponseMessage(`Error: ${data.message || "Registration failed"}`);
      }
    } catch (error) {
      console.log("Error during registration:", error);
      setResponseMessage("An error occurred during registration.");
    }
  };

  return (
    <div className="addpatientsContainer">
    <div className="addpatientsContainerHeading">
      <h2>Register a New Patient</h2>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="patientinputDiv">
          <label>Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={patientData.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="patientinputDiv">
          <label>Patient Age</label>
          <input
            type="number"
            name="patientAge"
            value={patientData.patientAge}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          <label htmlFor="patientCondition">Medical Condition</label>
          <select
            id="patientCondition"
            name="patientCondition"
            value={patientData.patientCondition}
            onChange={handleChange}
            required
            className="selectTag"
          >
            <option value="">Medical Condition</option>
            <option value="normal">Normal</option>
            <option value="critical">Critical</option>
            <option value="serious">Serious</option>
            <option value="stable">Stable</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>

        <div className="patientinputDiv">
          <label htmlFor="admissionType">Admission Type</label>
          <select
            id="admissionType"
            name="admissionType"
            value={patientData.admissionType}
            onChange={handleChange}
            required
            className="selectTag"
          >
            <option value="" className="headingoptionofselect">
              Admission Type
            </option>
            <option value="emergency">Emergency</option>
            <option value="scheduled">Scheduled</option>
            <option value="referral">Referral</option>
            <option value="observation">Observation</option>
            <option value="transfer">Transfer</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
        <div className="patientinputDiv">
          <label>Date of Admission</label>
          <input
            type="date"
            name="patientDOA"
            value={patientData.patientDOA}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          <label>Reason for Admission </label>
          <input
            type="text"
            name="patientAddmissionReason"
            value={patientData.patientAddmissionReason}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          <label>Patient Contact</label>
          <input
            type="number"
            name="patientContact"
            value={patientData.patientContact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          <label>Emergency Contact Name</label>
          <input
            type="text"
            name="patientEmergencyContactName"
            value={patientData.patientEmergencyContactName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          <label>Emergency Contact Number</label>
          <input
            type="number"
            name="patientEmergencyContactNumber"
            value={patientData.patientEmergencyContactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          <label>Date Of Birth</label>
          <input
            type="date"
            name="patientDOB"
            value={patientData.patientDOB}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          {/* <label>Gender</label>
          <input
            type="text"
            name="patientGender"
            value={patientData.patientGender}
            onChange={handleChange}
            required
          /> */}

          <label htmlFor="Gender">Gender</label>
          <select
            id="Gender"
            name="patientGender"
            value={patientData.patientGender}
            onChange={handleChange}
            required
            className="selectTag"
          >
            <option value="" className="headingoptionofselect">
              Gender
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="patientinputDiv">
          {/* <label>Blood Group</label>
          <input
            type="text"
            name="patientBloodGroup"
            value={patientData.patientBloodGroup}
            onChange={handleChange}
            required
          /> */}


          <label htmlFor="BloodGroup">Blood Group</label>
          <select
            id="BloodGroup"
            name="patientBloodGroup"
            value={patientData.patientBloodGroup}
            onChange={handleChange}
            required
            className="selectTag"
          >
            <option value="" className="headingoptionofselect">
            Blood Group
            </option>
            
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="Rare">Rare</option>
          </select>
        </div>

        <div className="patientinputDiv">
          <label>Total Fee</label>
          <input
            type="number"
            name="patientTotalFees"
            value={patientData.patientTotalFees}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          <label>Advance Payment</label>
          <input
            type="number"
            name="patientAdvancePayment"
            value={patientData.patientAdvancePayment}
            onChange={handleChange}
            required
          />
        </div>

        <div className="patientinputDiv">
          <label>Pre Medical History</label>
          <textarea
            name="patientMedicalHistory"
            value={patientData.patientMedicalHistory}
            onChange={handleChange}
            required
            rows="4"
            cols="50"
            // placeholder="Enter patient address"
          />
        </div>

        <div className="patientinputDiv">
          <label>Address</label>
          <textarea
            name="patientAddress"
            value={patientData.patientAddress}
            onChange={handleChange}
            required
            rows="4"
            cols="50"
            // placeholder="Enter patient address"
          />
        </div>

        {/* <div className="patientinputDiv "> */}
        <div className="patientinputDiv checkBoxDiv">
          <div className="patientcheckboxDiv">
            <label className="checkboxLabel">
              Is Bed Allotted
              <input
                type="checkbox"
                name="isBedAlloted"
                checked={patientData.isBedAlloted}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="patientinputDiv checkBoxDiv">
          <div className="patientcheckboxDiv">
            <label className="checkboxLabel">
              Has Insurance
              <input
                type="checkbox"
                name="isHasInsurance"
                checked={patientData.isHasInsurance}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="fromBtnDiv">
          <button type="submit" className="formbtn">
            Register Patient
          </button>
        </div>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Adpatients;
