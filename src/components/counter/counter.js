import React, {useState} from 'react';

function Counter(props) {
    const [show ,setShow] = useState(0)

    return (
        <div>
            <p>{show}</p>
            <button onClick={()=>{
                setShow(prev => prev -1)
            }}>decrement</button>
            <button onClick={()=>{
                setShow(0)
            }}>reset</button>
            <button onClick={()=>{
                setShow(prev => prev +1)
            }}>increment</button>
        </div>
    );
}

export default Counter;