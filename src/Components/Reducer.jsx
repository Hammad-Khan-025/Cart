const Reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
      return { ...state, cart: [], amount: 0 };
    }
    if (action.type === "REMOVE") {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payLoad),
      };
    }
    return state;
  };
  
  export default Reducer;
  