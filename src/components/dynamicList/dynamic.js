import React, {useState} from 'react';
import './dynamic.css'

function Dynamic(props) {
    const [data , setData] = useState([])
    const [text, setText] = useState('')

    function handleAdd(){
        if(text){
            setData([...data , {
                text: text,
                isStriked: false
            }])
        }

    }

    // console.log(data)
    function handleScratch(getIndex){
      //   copy it first , we don't wanna do it in OG Array
      const updatedItems = [...data]
        updatedItems[getIndex].isStriked = !updatedItems[getIndex].isStriked
        setData(updatedItems)
    }


    return (
        <div>
        {/*     input take */}
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Submit</button>

        {/*     show them */}

            {
                data && data.length && data.map((item , index)=>{
                    return <div className={item.isStriked ?'striked' : ''} onClick={() => handleScratch(index)} key={index} style={{border: '3px solid red'}}>
                    <p >{item.text}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Dynamic;