import Startgame from "./startgame";
import React from 'react'
let Display=(obj)=>{
    return(
        <div>
            <div style={{width:90,height:30,border:'1px solid grey',margin:'10px',borderRadius:'10px'}}>
                SCORE 0
            </div>
            <div style={{width:90,height:30,border:'1px solid grey',margin:'10px',borderRadius:'10px'}}>
                ROWS 0
            </div>
            <div style={{width:90,height:30,border:'1px solid grey',margin:'10px',borderRadius:'10px'}}>
                LEVEL 0
            </div>
          <Startgame disgamearea={obj.disgamearea}/>
        </div>
    )
}
export default Display;