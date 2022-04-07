
import React from 'react'
import { useDispatch } from 'react-redux'
import {setMyInterval} from '../../store/actions'
import { useSelector } from 'react-redux';
import { incremetValue } from '../../store/actions';

function Increment() {
    const dispatch=useDispatch();
    const checked= useSelector(state=>state.isChek)

    const onHandleChange=(even)=>{
        const interval= even.target.value;
        dispatch(setMyInterval(interval))
    }
    // dispatch({
    //             type: 'INCREMENT',
    //             payload: even.target.value
    //         })
    const onHandleClick=(even)=>{
        if(checked)
        {
             dispatch(incremetValue())
        }
       
    }
 
  return (
    <div>
        <label htmlFor="interval">interval</label>
        <input type="number" onChange={onHandleChange} id="interval" placeholder="ingresa el numero a sumar" />    
        <br />
        <button type='button' onClick={onHandleClick}>Sum</button>
    </div>
  )
}

export default Increment