import { useContext } from "react";
import Child from "./Child";
import ValueContext from "./ValueContext";

export default  function Parent(){
    const value = useContext(ValueContext);
    return (
        <>
            <div>
                <h1>
                    from Parent
                </h1>
                {value ? 'value is true' : 'value is false'}
            </div>            
            <Child />
        </>
       
    )
}