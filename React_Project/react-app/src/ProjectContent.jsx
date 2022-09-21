import React from "react"

export default function ProjectContent(props: projectContentProps){
    return(
        <>
            <h1>Top Part</h1>
            {props.children}
            <h1>bottom part</h1>
            {props.bottomPart}
        </>
    )
}

interface projectContentProps{
    children: React.ReactNode;
    bottomPart:React.ReactNode;
    
}