import { createStore } from "redux";

// Create your action creators here.

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);
const increment = () => {
  return { type: "increment" };
};
const decrement = () => {
  return { type: "decrement" };
};

// Modify the dispatches below.
store.dispatch(increment());
store.dispatch(decrement());
console.log(store.getState());
