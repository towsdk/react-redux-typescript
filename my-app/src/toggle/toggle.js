import React, { useState } from "react";

const Toggle = () => {
 const [Toggle, setToggle] = useState(true);
    return (
        <div style={{margin: "1rem",
        backgroundColor: "pink",
         padding: "1rem"}}>
            {Toggle && (
                <p>Lorem is a workd for making ust for utmost.</p>
            )}
            <div style={{ textAlign: "center" }}>
                <button onClick={()=> setToggle(!Toggle)}>{Toggle ?"hide":"show"}</button>
            </div>
        </div>
    )
}

export default Toggle;