
import React, { useState } from 'react';

function Selection(props){
    const [Backgroundcolor, setbackgroundColor] = useState({background:''});
    // console.log(Backgroundcolor);
    const applyColor = ()=>{
        props.applyColor(props.backgc);
        setbackgroundColor({background: props.backgc})
    }
 return (<>
     <div className = "fix-box" style = {{background: Backgroundcolor.background}} onClick={applyColor}>
            <h2 className = "subheading">{props.selectionName}</h2>
     </div>
 </>);
}
export default Selection;