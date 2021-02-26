

//-------the reducer implements the way the state is changed in response to actions send.

export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//---- this reducer functions ads an item to the basket
//it gets the previous state and the action to perform as param and returns the prev state (...state)
//plus the new basket (...state.basket,action.item)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //the removal is done with indexing. we find the index of the item to remove and check wether its actually there and if so 
    //we remove it with splice function
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      }
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
