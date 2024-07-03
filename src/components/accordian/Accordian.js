import React, {useState} from 'react';
import {data} from "./data";
import './Accordian.css'

function Accordian(props) {
    const [pressed , setPressed]= useState(false)
    const [ single , setSingle] = useState(null)
const [multi , setMulti] = useState([])




function handleSingle(getId){
    // console.log(getId)
        setSingle(single === getId ? null : getId)
}

function handleMulti(getId){
        const cpyMulti = [...multi]
    let findIndex = cpyMulti.indexOf(getId)
    console.log(findIndex)
    if(findIndex === -1) {
        cpyMulti.push(getId)
    }
    else{
        cpyMulti.splice(findIndex,1)
    }
   setMulti(cpyMulti)
}


    return (
        <div className="outer">
            <button onClick={()=>{
                setPressed(prev => !prev)
            }}>click for multiselect</button>
            <h1>Accordian</h1>
            {
                data && data.map((item, index)=>{
                    return <div key={index} onClick={pressed ? ()=> handleMulti(item.id) : () => handleSingle(item.id)} className="inner">
                        <p>{item.question}</p>
                        {
                           pressed ? multi.indexOf(item.id) !== -1 && <p>{item.answer}</p>  : single === item.id && <p>{item.answer}</p>
                        }
                    </div>
                })
            }
        </div>
    );
}

export default Accordian;