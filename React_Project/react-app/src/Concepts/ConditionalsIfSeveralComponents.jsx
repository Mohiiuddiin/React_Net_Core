import { useState } from "react"
import ProjectContent from "./ProjectContent"
import SelectNumber from "./SelectNumber"
import Simple from "./Simple"

export default function ConditionalsIfSeveralComponents(){
    
    const [selectedRate, setSelectedRate] = useState(1)
    
    function displayResult()
    {
        if(selectedRate===1){
            return <span>Nooo!</span>
        }else if(selectedRate===2){
            return (
                <>
                   <span>Please tell us how to get better: </span>
                   <input type="text"></input>
                </>
            )
        }else if(selectedRate===3){
            return <><Simple/></>            
        }else{ 
            <span>Thanks!</span>            
        }
    }
    return (
        <>
        <div>Rate this website</div>
        {/* <SelectNumber maxValue={10} onSelected={setSelectedRate}/> */}

        <SelectNumber selectContent={(value) =>`Select ${value}`} 
         maxValue={10}  
         onSelected={setSelectedRate}/>
            <div>
                {displayResult()}
            </div>
            <div>
                <ProjectContent bottomPart={<><span>thid is the end</span></>}>
                    <>
                        <button onClick={()=> console.log('I was clicked')}>This is a button as a parameter</button>
                        <Simple></Simple>
                        {/* <Simple></Simple> */}

                    </>
                </ProjectContent>                
            </div>
        </>
    )
}