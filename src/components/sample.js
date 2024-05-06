// const Sample =(props) =>{
//     return(
//         <div>
//         <h2>This is sample component </h2>
//         </div>
//     );
// }   
// export default Sample;

import { useState } from "react";

const Sample = () => {
    const [name, setName] = useState ('John Doe');

    const changeName =  ()=>{
        setName('Mary Doe');
    }
    return (
        <div>
            <h1>My name is: {name} </h1>
            <button onClick={changeName}> Click me to change </button>
        </div>
    );
}

export default Sample;

