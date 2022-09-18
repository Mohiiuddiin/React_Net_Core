function Expressions(){
    const subText = 'This is my subtext';
    const reactLogourl='https://storage.googleapis.com/prd-engineering-asset/2021/12/e46ebeca-react-logo.png'
    
    const duplicate = (value:number)=>value*2;

    return(
        <>
            <h1>Expressions Example</h1>
            <h2>{subText.toUpperCase()}</h2>
            <h3>The double of 3 is equal to {duplicate(3)}</h3>
            <img src={reactLogourl} alt="react logo"></img>
        </>
    )
}

export default Expressions