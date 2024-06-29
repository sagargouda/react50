import React, {useState} from 'react';

function Counter(props) {
    const [show ,setShow] = useState(0)

    function handleDec(){
        setShow(prev => prev - 1)
    }
    function handleInc(){
        setShow(prev => prev + 1)
    }
    function handleReset(){
        setShow(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{show >= 0 ? show : 'less than zero can"t do anything '}</p>
            <button onClick={handleDec}>decrement</button>
            <button onClick={handleInc}>increment</button>
    <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter;