import React from "react";
import ReactDOM from "react-dom";

import './List.css';

function List(props) {

  const { heading, value, handleChange, formData  } = props;

  return (
    <div className="wrapper">
          <label>
          <input
          type="radio"
          name="passportcenters"
          value={heading}
          checked={formData.passportcenters == heading}
          onChange={handleChange}
          />
        
         <h1>{heading}</h1>
         <ul>
         {
            value && value.map((str) => {
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