
import React, { useState } from 'react';

function Selection(props){
    // const [Backgroundcolor, setbackgroundColor] = useState({background:''});
 return (<>
     <div className = "fix-box" style = {{background: props.backgc}} onClick={props.applyColor(props.backgc)}>
            <h2 className = "subheading">{props.selectionName}</h2>
     </div>
 </>);
}
export default Selection;