import React from 'react'
import {Header} from '../components/Header'
import {Routes} from '../router'
export default({children})=>{
  return(
    <div style={{height:'100vh'}}>
      <Header Routes={Routes}/>
      {children}
    </div>
  )
}