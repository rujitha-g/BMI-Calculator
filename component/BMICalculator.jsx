import React, { useState } from "react";

import Underweight from "../assets/Underweight.png";
import Normalweight from "../assets/Normalweight.png";
import Overweight from "../assets/Overweight.png";
import Obesity from "../assets/Obesity.png";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter weight and height");
      return;
    }

    const heightInMeters = height / 100;

    const bmiValue = (
      weight /
      (heightInMeters * heightInMeters)
    ).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue < 25) {
      setStatus("Normal Weight");
    } else if (bmiValue < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Enter Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <br />

      <input
        type="number"
        placeholder="Enter Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <br />

      <button
        onClick={calculateBMI}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Calculate BMI
      </button>

      {bmi && (
        <>
          <h3>BMI: {bmi}</h3>
          <h3>Status: {status}</h3>

          {status === "Underweight" && (
            <img
              src={Underweight}
              alt="Underweight"
              width="250"
              style={{ marginTop: "20px" }}
            />
          )}

          {status === "Normal Weight" && (
            <img
              src={Normalweight}
              alt="Normal Weight"
              width="250"
              style={{ marginTop: "20px" }}
            />
          )}

          {status === "Overweight" && (
            <img
              src={Overweight}
              alt="Overweight"
              width="250"
              style={{ marginTop: "20px" }}
            />
          )}

          {status === "Obese" && (
            <img
              src={Obesity}
              alt="Obese"
              width="250"
              style={{ marginTop: "20px" }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default BMICalculator;