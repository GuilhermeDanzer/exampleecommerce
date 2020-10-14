import React from 'react'
import './css/input.scss'

export const Input = ({...props}) =>{

  return(
    <>

    <input {...props} className='input'/>
    </>
  )
}