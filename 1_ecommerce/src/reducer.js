//defing all the application level of states and define action to make changes to the state

import { red } from "@mui/material/colors"

export const initialState = {
    basket: [],
}

//Selector

export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0))
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `can't remove Product(id: ${action.id} because it's no longer here!`) 
                
            }

            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
           
    }
}

export default reducer