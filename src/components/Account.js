import React from 'react'
import { increment,decrement } from '../slices/bank'
import {  useDispatch, useSelector } from 'react-redux'



const Account = () => {


  const {name,result}=useSelector((state)=>({
    name: state.counterslice.name,
    result: state.counterslice.result,


  }))


  const dispatch =useDispatch()

const handleclick=(e)=>{
  if(e.target.id==="inc1"){
    dispatch(increment(10000))
  }
else if(e.target.id==="inc2")
dispatch(decrement(5000))
}



  return (
    <div>

<p>Hello, {name}</p>
{result>0?<h3>${result}</h3>:<h3>Insufficient Balance</h3>}

<p>Total Amount</p>
<button id="inc1" onClick={handleclick}>Withdraw $10000</button>
<button  id="inc2" onClick={handleclick}>Withdraw $5000</button>


    </div>
  )
}

export default Account