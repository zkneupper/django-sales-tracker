import axios from "axios";
import { GET_SALES, DELETE_SALE, ADD_SALE } from "./types";

// Create an action method called getSales with an arrow function
export const getSales = () => dispatch => {
  // make a request
  axios
    // to pull or get from server
    .get("/api/salestracker/")
    // setup promise
    .then(res => {
      dispatch({
        // pass in an objects
        type: GET_SALES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Create an action method called deleteSale with an arrow function
export const deleteSale = id => dispatch => {
  // make a request
  axios
    // to remove from server
    .delete(`/api/salestracker/${id}/`)
    // setup promise
    .then(res => {
      dispatch({
        // dispatch an action to the sales reducer
        type: DELETE_SALE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addSale = sale => dispatch => {
  // make a request
  axios
    // to push to server
    .post("/api/salestracker/", sale)
    // setup promise
    .then(res => {
      dispatch({
        // pass in an objects
        type: ADD_SALE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
