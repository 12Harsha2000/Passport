import React, { useState } from 'react';
import List from './List'; 

const valuesOne = ["Name: Kochi Passport Center", "Address : 123 Main Street, Kochi", "Timings : 9:00 AM - 5:00 PM"]
const valuesTwo = ["Name: Kottayam Passport Center", "Address : 456 Park Avenue, Kottayam", "Timings : 8:30 AM - 6:00 PM"]
const valuesThree = ["Name: Kannur Passport Center", "Address : 789 Elm Road, Kannur", "Timings : 9:30 AM - 6:00 PM"]
const valuesFour = ["Name: Kozhikkode Passport Center", "Address : 567 Oak Lane, Kozhikkode", "Timings : 10:00 AM - 7:00 PM"]

function Passport() {

    const initialFormData = {  
      firstName: '',
      Nationality: '',
      phone: '',
      gender: '',
      checkbox: '',
      passportcenters: "", 
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const [savedId, setSavedId] = useState(null);
  const [data, setData] = useState({});

  const handleChange = (event) => {
  const {name, value, type, checked } = event.target;
  const inputValue = type === 'checkbox' ? checked : value;

  setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue
  }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5500/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error saving form data');
      }
      const data = await response.json();
        setSavedId(data.id);
        console.log('Form data submitted:', data);
        setFormData(initialFormData);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleViewClick = async () => {
    if(savedId) {
    try {
      const response = await fetch(`http://localhost:5500/data?id=${savedId}`);
      const fetchedData = await response.json();
      setData(fetchedData);
      console.log(Object.entries(fetchedData));
     }catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  };
  
  return (
    <div>
      <h1>Passport Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Nationality:
          <input
            type="text"
            name="Nationality"
            value={formData.Nationality}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email1"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Mobile number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Gender :
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
        </label>
        <br />

        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />

        <div>
          <List heading="Center 1" value={valuesOne}  handleChange={handleChange}  formData={formData}/>
          <List heading="Center 2" value={valuesTwo}  handleChange={handleChange}  formData={formData}/>
          <List heading="Center 3" value={valuesThree}  handleChange={handleChange}  formData={formData}/>
          <List heading="Center 4" value={valuesFour}  handleChange={handleChange}  formData={formData}/>
        </div>

        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
            required
          />
          I have read and agree to all the <a href="">Terms & Conditions</a>
        </label>
        <br />

        <button type="submit">Submit</button>
        {savedId && <p>Form Data saved{savedId}</p>}
        <button onClick={handleViewClick} disabled={!savedId} id="view">View Data</button>
        {Object.entries(data).length > 0 && (

        <div>
        <h2>Fetched Data:</h2>
        <ul>
          {Object.entries(data).map(item => (
            <li key={item[0]}>{JSON.stringify(item, null, 2)}</li>
          ))}
        </ul>
      </div>
    )}
      </form>
      <div id="value"></div>
    </div>
   );
  }
   
export default Passport;
