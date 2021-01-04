
import React, { useState } from 'react';
import "../styles/Child.css";
function Selection(props){
    const [Backgroundcolor, setbackgroundColor] = useState({background:''});
    // // console.log(Backgroundcolor);
     const apply = props.applyColor
 return (<>
     <div className = "fix-box" style = {Backgroundcolor} onClick={()=>{apply(setbackgroundColor)}}>
            <h2 className = "subheading">{props.selectionName}</h2>
     </div>
 </>);
}
export default Selection;