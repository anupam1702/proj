import React,{useState} from 'react'
import { useEffect } from 'react';

export default function Form() {

    const data = {name:"", email:"", password:""};
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false)

    useEffect(() =>{
        console.log("Registered")
    }, [flag])

    function handleData(e){
        setInputData({...inputData, [e.target.name]: 
            e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Input Fields are Mandatory")
        }
        else{
            setFlag(true);
        }
    }

    
  return (
    <>

    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>

    
    <form className="container" onSubmit={handleSubmit}>
    <div className="header">
    <h1>Registration Form</h1>
    </div>

    <div>
    <input type="text" placeholder='Enter Your Name' name='name' onChange={handleData} value={inputData.name}></input>
    </div>

    <div>
    <input type="text" placeholder='Enter Your Email' name='email' onChange={handleData} value={inputData.email}></input>
    </div>

    <div>
    <input type="text" placeholder='Enter Your Password' name='password' onChange={handleData}  value={inputData.password}></input>
    </div>

    <div>
    <button type='submit'>Submit</button>
    </div>
    
    </form>

    </>
  )
}
