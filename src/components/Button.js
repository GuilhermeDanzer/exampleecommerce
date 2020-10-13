import React from 'react'
import './css/button.scss'

export const Button = ({texto,...props}) => {
  return (
  <button className='botao' {...props}>{texto}</button>
  )
}
