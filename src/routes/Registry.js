import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

function Registry(){
    const [registryData,setRegistryData]=useState([])
    const [textInput,setTextInput]=useState("")
    const [error10, setError10] = useState(false)

    
    const addItem=(e) =>{
        e.preventDefault();

        const tempData=[...registryData]
        if (error10) return
       

        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")

    }

    useEffect(()=>{
        if (textInput.length!=10) setError10(true)
        else setError10(false)

    },[textInput])


    const removeItem = (index) => {
        let newData=[...registryData]
        newData.splice(index,1)
        setRegistryData(newData)
    }

    const updateItem = (index) => {
        if (error10) return
        let newData=[...registryData]
        newData[index]=textInput
        setRegistryData(newData)
    }
    
    
    return(
        <div>

            <h1>Registry</h1>
            <Link to="/home">Home</Link>

            <form onSubmit={addItem}>
                <label>Enter Your text: 
                    <input type="text" value={textInput} onChange={(e)=> setTextInput(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>

            {error10 ? <span style={{color:"red"}}> Phone number should be 10 digits </span>: null}

            {
                registryData.map((item,index) =>{
                    return (
                        <li style={{marginLeft:"100px"}}key={index}>{item} 
                        <button style={{margin:"10px"}} onClick={()=>removeItem(index)}> Delete Number</button>
                        <button onClick={()=>updateItem(index)}>Update Number</button>
                        </li>
                    )
                })
            }
        </div>
    )
}
export default Registry;