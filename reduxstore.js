const data = require("./data.js");

console.log(data);

function reducer(state, action) {
  console.log(state, action);
  if (state === undefined) {
    return { MemberInfo: data };
  }
  let newState;
  if (action.type === "CHANGE_COLOR") {
    newState = Object.assign({}, state, { color: action.color });
  }

  return newState;
}

const store = Redux.createStore(reducer);
console.log(store.getState());
