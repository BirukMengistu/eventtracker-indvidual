import { ActionTypes } from "../actions-types";
const intialState = {
  events: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EVENTS:
      return { ...state, events: payload };
    default:
      return state;
  }
};

export default function selectedProductsReducer  (state = {}, { type, payload }){
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_EVENT:
      return { ...state,
         ...payload };
    case ActionTypes.REMOVE_SELECTED_EVENT:
      return {};
    default:
      return state;
  }
};

