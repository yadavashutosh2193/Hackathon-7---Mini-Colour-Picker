
import React, { useState } from 'react';

function Selection(props){
    const [Backgroundcolor, setbackgroundColor] = useState({background:''});
    // console.log(Backgroundcolor);
    const DivClick = ()=>{
        props.applyColor("green");
        setbackgroundColor({background: props.backgc})
    }
 return (<>
     <div className = "fix-box" style = {{background: Backgroundcolor.background}} onClick={DivClick}>
            <h2 className = "subheading">{props.selectionName}</h2>
     </div>
 </>);
}
export default Selection;