import React from 'react';
import { useState } from 'react'; 

let Startgame = (obj) => {
    let[copyflag,setcopyflag]=useState(true)
  return (
    <div>
      <button
        style={{
          width: 90,
          height: 30,
          border: "1px solid grey",
          margin: "10px",
          borderRadius: "10px",
        }}
        onClick={()=>{
            copyflag==true?setcopyflag(false):setcopyflag(true)
           obj.disgamearea(copyflag);
          
        
        
        }
    }
      >
      {copyflag==true?'Start Game':'end game'}  
      </button>
    </div>
  );
};
export default Startgame;
