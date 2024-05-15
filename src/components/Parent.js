import React, { useState } from 'react'
import Child from './Child'
function Parent (){
    let [marksParent , setMarksParent] = useState(100)
    
    function marksDisplay (marks, student ){
        setMarksParent(marks);
        console.log(`the marks of the student ${student} is ${marks}`)
    }
    if (marksParent < 40 ){
        console.log("Scold Them ")
    }
    else{
        console.log(" the parent is happy ")
    }
    return(
<>
 <Child marksDisplay={marksDisplay}></Child>

</>
    )

}

export default Parent