import { GET_SALES, DELETE_SALE, ADD_SALE } from "../actions/types";

const initialState = {
  sales: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SALES:
      return {
        ...state,
        sales: action.payload
      };
    case DELETE_SALE:
      return {
        ...state,
        // filter id's that are not part of the delete action so the items gets deleted on both the server-side and client-side
        sales: state.sales.filter(sale => sale.id !== action.payload)
      };
    case ADD_SALE:
      return {
        ...state,
        sales: [...state.sales, action.payload]
      };
    default:
      return state;
  }
}
