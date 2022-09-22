import { useState } from "react";
import { useEffect } from "react"

export default function UseEffectExamples(){
    const[clicks,setClickes] = useState(0);
    useEffect(()=>{
        // Executed Immediately
        console.log('component loaded');

        return()=>{
            //run before the component will be destroyed
            console.log('the component will be destroyed');
        }
    },[])

    useEffect(()=>{
        document.title = `${clicks} times`;
    },[clicks])


    return(
        <>
            <h1>UseEffect Examples</h1>
            <div>
                <button onClick={()=>setClickes(clicks+1)}>
                    you have clicked {clicks} times
                </button>
            </div>
        </>
    )
}