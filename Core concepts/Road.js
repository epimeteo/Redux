let initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

const gather = {
  type: "gather",
};
const tippedWagon = {
  type: "tippedWagon",
};
const travel = {
  type: "travel",
  payload: 1,
};
const travel2 = {
  type: "travel",
  payload: 3,
};

const Reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather":
      return {
        ...state,
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1,
      };
    case "travel":
      if (state.supplies - action.payload * 20 < 0) {
        return state;
      } else {
        return {
          ...state,
          supplies: state.supplies - action.payload * 20,
          distance: state.distance + action.payload * 10,
          days: state.days + action.payload,
        };
      }

    case "tippedWagon":
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };

    default:
      return state;
  }
};
let myState = Reducer(undefined, {});
console.log(myState);
let myState2 = Reducer(myState, travel);
console.log(myState2);
let myState3 = Reducer(myState2, gather);
console.log(myState3);
let myState4 = Reducer(myState3, tippedWagon);
console.log(myState4);
let myState5 = Reducer(myState4, travel2);
console.log(myState5);
let myState6 = Reducer(myState5, travel2);
console.log(myState6);
