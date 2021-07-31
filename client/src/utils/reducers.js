import { useReducer } from "react";
import {
  QUERY_EVENTS,
  UPDATE_EVENTS,
  ADD_TO_LIST,
  // UPDATE_CART_QUANTITY,
  // REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_LIST,
  // UPDATE_CATEGORIES,
  // UPDATE_CURRENT_CATEGORY,
  // CLEAR_CART,
  // TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_EVENTS:
      return {
        ...state,
        events: [...action.events],
      };
    case QUERY_EVENTS:
      return {
        ...state,
        events: [...action.events],
      };

      case ADD_TO_LIST:
      return {
        ...state,
        listOpen: true,
        list: [...state.list, action.events],
      };

    case ADD_MULTIPLE_TO_LIST:
      return {
        ...state,
        list: [...state.list, ...action.events],
      };



    // case UPDATE_CART_QUANTITY:
    //   return {
    //     ...state,
    //     cartOpen: true,
    //     cart: state.cart.map(product => {
    //       if (action._id === product._id) {
    //         product.purchaseQuantity = action.purchaseQuantity
    //       }
    //       return product
    //     })
    //   };

    // case REMOVE_FROM_CART:
    //   let newState = state.cart.filter(product => {
    //     return product._id !== action._id;
    //   });

    //   return {
    //     ...state,
    //     cartOpen: newState.length > 0,
    //     cart: newState
    //   };

    // case CLEAR_CART:
    //   return {
    //     ...state,
    //     cartOpen: false,
    //     cart: []
    //   };

    // case TOGGLE_CART:
    //   return {
    //     ...state,
    //     cartOpen: !state.cartOpen
    //   };

    // case UPDATE_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: [...action.categories],
    //   };

    // case UPDATE_CURRENT_CATEGORY:
    //   return {
    //     ...state,
    //     currentCategory: action.currentCategory
    //   }

    // default:
    //   return state;
  }
};

export function useEventReducer(initialState) {
  return useReducer(reducer, initialState);
}