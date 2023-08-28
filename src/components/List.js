import React, { useState } from 'react';
import './List.css';

function List(props) {

  const { header,values  } = props;

  return (
    <div className="wrapper">
          <label for="radioOption">
          <input
          type="radio"
          id="radioOption"
          name="passport centers"
          value={FormData.passportcenters}
        
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