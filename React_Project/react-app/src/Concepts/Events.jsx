import React from "react";
import { useState } from "react";

export default function Events() {

    const [canSee,setCanSee] = useState(false);
    const [txt,setTxt] = useState('');
    //const canSee = false;

    function handleCheckBoxChange() {
        //alert('my value was changed');
        //canSee = !canSee;
        setCanSee(!canSee);
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value);
        setTxt(e.currentTarget.value);
    }
    return (
        <>
            <h1>
                Conditionals Example
            </h1>
            <div>
                <input type="checkbox" onChange={handleCheckBoxChange} />
            </div>
            <div>
                <button onClick={() => {
                    alert('I heve been clicked')
                }} >Click Me</button>
            </div>
            <div>
                <input type="text" onKeyUp={(e)=>{
                    handleKeyUp(e)
                }}></input>
            </div>
            
            {
                canSee ? <div>you are seeing the secret </div> :
                    <div>you are not allowed to see</div>
            }
            <div>
                {txt}
            </div>
        </>
    )
}