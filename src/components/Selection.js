
import React, { useState } from 'react';

function Selection(props){
    const [Backgroundcolor, setbackgroundColor] = useState({background:''});
    // console.log(Backgroundcolor);
 return (<>
     <div className = "fix-box" style = {{background: Backgroundcolor.background}} onClick={()=>setbackgroundColor({background: props.backgc})}>
            <h2 className = "subheading">{props.selectionName}</h2>
     </div>
 </>);
}
export default Selection;