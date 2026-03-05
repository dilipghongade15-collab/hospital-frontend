import React from "react";
import PatientForm from "./PatientForm";
import AppointmentForm from "./AppointmentForm";

function App() {

  return (
    <div style={{padding:"40px", fontFamily:"Arial"}}>

      <h1>Hospital Management System</h1>

      <PatientForm/>

      <hr/>

      <AppointmentForm/>

    </div>
  );
}

export default App;
