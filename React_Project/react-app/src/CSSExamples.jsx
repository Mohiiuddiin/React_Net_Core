//importing css files on a component will effect to whole application.not only to this component
//to solve this issue have to use .module.css

import css from './CSSExamples.module.css';

export default function CSSExample(){

    const square = {
        backgroundColor:'green',
        height:'50px',
        width:'50px',
        marginLeft:'1rem'

    }
    return (
        <>
            <h1 className="red">CSS Example</h1>
            <h2 style={{color:'blue',fontSize:'25px'}}>Sub Text</h2>
            <div style={square}></div>
            <br/>
            <div style={square}></div>
            <br/>
            <h2 className={css['primary-color']}>This is a text style from module</h2>
            <h2 className="primary-color">This is an example not from module</h2>
        </>
    )
}