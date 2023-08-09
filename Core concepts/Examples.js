/*
ACTION
Plain JavaScript object that represents an intention to change the store’s state
*/
const clearItems = {
  type: "shopping/clear",
};

/*
  Action object for a shopping list
  that adds an item to the list
  */
const addItem = {
  type: "shopping/addItem",
  payload: "Chocolate Cake",
};

/*
 REDUCER
 A reducer is a function that accepts the store’s 
 current state and an action and returns the new state.
 The below one handles 2 actions or returns the current state as a default
*/
const shoppingReducer = (state = [], action) => {
  switch (action.type) {
    case "shopping/clear":
      return [];
    case "shopping/addItem":
      return [...state, action.payload];
    default:
      /* 
        If the reducer doesn't care 
        about this action type, return 
        the existing state unchanged
        */
      return state;
  }
};

/* 
  IMMUTABLE UPDATES
  The value’s contents are copied into a new array or object and this copy is mutated.
  */
state = {
  location: "North Pole",
  temperatures: [-10, -14, -9, -18],
};
const newState = {
  ...state,
  temperatures: [...state.temperatures, -22, -17],
};

/*
 *RULES OF REDUCERS
  1.They should only calculate the new state value based on the state and action arguments
  2.They are not allowed to modify the existing state. Instead, they must make immutable updates, 
    by copying the existing state and making changes to the copied values.
  3.They must not do any asynchronous logic or other “side effects”

  **Some common behaviors to avoid inside reducers are network requests, 
    generating random numbers, and using asynchronous functions.**
*/
