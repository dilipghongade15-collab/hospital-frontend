import React, { useState } from "react";

function PatientForm() {

const [name,setName] = useState("");
const [phone,setPhone] = useState("");

const submitForm = (e) => {

e.preventDefault();

fetch("http://localhost:8080/api/patients",{
method:"POST",
headers:{'Content-Type':'application/json'},
body: JSON.stringify({name,phone})
})

alert("Patient Registered");

}

return(

<div>

<h2>Patient Registration</h2>

<form onSubmit={submitForm}>

<input
placeholder="Patient Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<br/><br/>

<button type="submit">Register</button>

</form>

</div>

)

}

export default PatientForm;
