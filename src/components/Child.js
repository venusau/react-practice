import React from 'react'

function Child (props){
    let {marksDisplay}= props
    const marks = 20
    const student = "Vicky"
    return (
        <>
        <button style={{width:"100px", height:"100px" }} onClick={()=>{marksDisplay(marks, student)}}> click me to update marks</button>
        </>
    )
}

export default Child