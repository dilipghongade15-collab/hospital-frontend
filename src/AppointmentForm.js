import React, { useState } from "react";

function AppointmentForm(){

const [patientId,setPatientId] = useState("");
const [doctorId,setDoctorId] = useState("");

const bookAppointment = (e)=>{

e.preventDefault();

fetch("http://localhost:8080/api/appointments",{
method:"POST",
headers:{'Content-Type':'application/json'},
body: JSON.stringify({patientId,doctorId})
})

alert("Appointment Booked");

}

return(

<div>

<h2>Book Appointment</h2>

<form onSubmit={bookAppointment}>

<input
placeholder="Patient ID"
value={patientId}
onChange={(e)=>setPatientId(e.target.value)}
/>

<br/><br/>

<input
placeholder="Doctor ID"
value={doctorId}
onChange={(e)=>setDoctorId(e.target.value)}
/>

<br/><br/>

<button type="submit">Book</button>

</form>

</div>

)

}

export default AppointmentForm;
