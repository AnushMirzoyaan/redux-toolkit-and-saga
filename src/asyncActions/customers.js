import { addMainCustomerAction } from "../store/customersReducer";

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addMainCustomerAction(json)));
  };
};
