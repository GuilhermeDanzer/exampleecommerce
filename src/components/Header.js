import React, {useState,useEffect,useRef} from 'react'
import './css/header.scss'
import {Cart} from './Cart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export const Header = ({rotas}) => {


  const [cart,setCart] = useState(false)
  const abrirCart = () =>{
    setCart(!cart)
    }

  const refContainer = useRef()
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
        if (refContainer.current && !refContainer.current.contains(event.target)) {
          setCart(false)
        }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);


  return (
<>
      <nav className='headerDiv'>
  
       <div className='navItens' ref={refContainer}>
         <ShoppingCartIcon style={{paddingTop:10,fontSize:40}} onClick={() => abrirCart() }/>
         {cart&&(<Cart/>)}
       </div>
       
      
      </nav>
 </>
  )
}
