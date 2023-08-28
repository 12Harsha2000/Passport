import React, { useState } from 'react';
import './List.css';

function List(props) {

  const { header,values,handleChange,formData  } = props;

  return (
    <div className="wrapper">
          <label for="radioOption">
          <input
          type="radio"
          id="radioOption"
          name="passportcenters"
          value={header}
          checked = {formData.passportcenters==header}
          onChange = {handleChange}
          
        />
        
         <h1>{header}</h1>
        <ul>
         {
            values && values.map((str) => {
               return (
                  <li>{str}</li>
               )
            })
         }
        </ul>
        </label>
       </div> 
    )
 };
 
export default List;