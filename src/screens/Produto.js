import React from 'react'
import {Product} from '../components/Product'
import './css/Produto.scss'
import Moletom from '../assets/img/moletom.png'
export const Produto = () => {
  return (
  <div className='container'>
    <Product img={Moletom}/>
  </div>
  )
}
