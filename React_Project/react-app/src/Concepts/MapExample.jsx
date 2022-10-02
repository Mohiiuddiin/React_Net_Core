export default function MapExample(){
    //const arr = [1,2,3,4,5];
    const arr = Array(100).fill(0);//[0,0,0,....,0]
    return (
        <>
            <h1>Iteration Example</h1>

            <select onChange={(e)=>{
                console.log(e.currentTarget.value);
            }}>
                {/* <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option> */}

                {arr.map((number,index) => <option key={index+1} value={index+1}>{index+1}</option>)}
            </select>
        </>
    )
}