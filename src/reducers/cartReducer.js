const initState = {
  cartItems: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'REMOVE_ITEM':
      return {...state, cartItems:state.cartItems.filter((item)=>item.id!==action.payload)}
    case 'PRICE_ALL':
      return {...state, price:action.payload}
    default:
        return state
  }
  
};

export default cartReducer;
