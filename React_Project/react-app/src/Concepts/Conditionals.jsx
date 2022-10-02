export default function Conditionals(){
    const canSee = false;
    return(
        <>
            <h1>
                Conditionals Example
            </h1>
            {
            canSee ? <div>you are seeing the secret </div> : 
            <span>you are not allowed to see</span>
            }
        </>
    )

}