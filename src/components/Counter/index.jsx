import React from 'react'
import { useSelector } from 'react-redux'

export  function Counter() {
    const counter = useSelector(state => state.count)
    const interval = useSelector(state => state.setInter)

  return (
      <>
        <h1>
        {"counter es " + counter}
        </h1>
        <h2>
         {"interval es " + interval}
        </h2>
      </>

  )
}
