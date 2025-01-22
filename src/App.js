import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customersReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="app">
      <div className="cash">{cash}</div>
      <div className="button-wrapper">
        <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
      </div>
      <div className="button-wrapper">
        <button onClick={() => addCustomer(prompt())}>Add Customer</button>
        <button onClick={() => getCash(Number(prompt()))}>Get Customer</button>
      </div>
      {customers.length > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            maxWidth: "500px",
            flexWrap: "wrap",
          }}
        >
          {customers.map((customer) => (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                fontSize: "20px",
                fontWeight: 500,
                cursor: "pointer",
              }}
              onClick={() => removeCustomer(customer)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            fontSize: "20px",
            fontWeight: 500,
          }}
        >
          No customers
        </div>
      )}
    </div>
  );
}

export default App;
