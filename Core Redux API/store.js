import { createStore } from "redux";

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

store.dispatch({ type: "increment" });
console.log(store.getState());
store.dispatch({ type: "increment" });
console.log(store.getState());

store.dispatch({ type: "decrement" });
console.log(store.getState());

store.dispatch({ type: "decrement" });
console.log(store.getState());

store.dispatch({ type: "decrement" });
console.log(store.getState());
