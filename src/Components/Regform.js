import React from "react";
import "./Regform.css";
import { useState } from "react";

function Regform() { // This use state method accepts two data 1)Current state 2)function updated data
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [mobileNumber, setmobileNumber] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [dob, setdob] = useState("")
  const [gender, setgender] = useState("")
  const [selectState, setselectState] = useState("")
  const [selectCourse, setselectCourse] = useState("")
  const [deliveryMode, setdeliveryMode] = useState("")
  const [comments, setcomments] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  // Targetting value of Gender
  const handelOptionChange = (event) => {
    setgender(event.target.value);
  }
  // Targetting value of Delivery Mode
  const handelOption = (event) => {
    setdeliveryMode(event.target.value)
  }
  const handelSubmit = (e) => {
    //with this details store on the page will not be removed
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
    }
    else {
      setPasswordError(false);

      console.log("firstname", firstname);
      console.log("lastname", lastname);
      console.log("mobileNumber", mobileNumber);
      console.log("email", email);
      console.log("password", password);
      console.log("confirmPassword", confirmPassword);
      console.log("dob", dob);
      console.log("gender", gender);
      console.log("selectState", selectState);
      console.log("selectCourse", selectCourse);
      console.log("deliveryMode", deliveryMode);
      console.log("comments", comments);
      alert("your response updated successfully: " + firstname);
    }
    // window.location.reload();

    // Add logic here to submit form data to backend
  };
  return (
    <div>
      <form className="RegForm" onSubmit={handelSubmit}>
        <fieldset>
          <legend>PERSONAL INFORMATION</legend>
          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" placeholder="Enter your First Name" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" placeholder="Enter your Last Name" value={lastname} onChange={(e) => setlastname(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input type="text" id="mobileNumber" placeholder="Enter your Mobile Number" maxLength={10} value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your Email" value={email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your Password" value={password} onChange={(e) => setpassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm-Password:</label>
            <input type="password" id="confirmPassword" placeholder="Re-Type Password" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">DOB:</label>
            <input type="date" id="dob" value={dob} onChange={(e) => setdob(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Gender:</label>
            <input type="radio" className="gender" value={"Male"} checked={gender === "Male"} onChange={handelOptionChange} />
            <label>Male</label>
            <input type="radio" className="gender" value={"Female"} checked={gender === "Female"} onChange={handelOptionChange} />
            <label>Female</label>
            <input type="radio" className="gender" value={"Others"} checked={gender === "Others"} onChange={handelOptionChange} />
            <label>Others</label>
          </div>
          <div className="form-group">
            <label htmlFor="selectState">Select State:</label>
            <select id="selectState" value={selectState} onChange={(e) => setselectState(e.target.value)}>
              <option>Select State</option>
              <option>Andhra Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Haryana</option>
              <option>Karnataka</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Odisha</option>
              <option>Tamil Nadu</option>
              <option>Uttar Pradesh</option>
              <option>West Bengal</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>COURSE INFORMATION</legend>
          <div className="form-group">
            <label htmlFor="selectCourse">Select Course:</label>
            <select id="selectCourse" value={selectCourse} onChange={(e) => setselectCourse(e.target.value)}>
              <option>Java Full Stack</option>
              <option>Python Full stack</option>
              <option>Software Testing</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="deliveryMode" >Delivery Mode:</label>
            <input type="radio" className="deliveryMode" value="Online" checked={deliveryMode === "Online"} onChange={handelOption} />
            <label>Online</label>
            <input type="radio" className="deliveryMode" value="Offline" checked={deliveryMode === "Offline"} onChange={handelOption} />
            <label>Offline</label>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" value={comments} onChange={(e) => setcomments(e.target.value)} />
          </div>
        </fieldset>
        {passwordError && <p className="warning">*password does not match*</p>}
        <button type="submit" >Register</button>
      </form>
    </div>
  )
}
export default Regform;