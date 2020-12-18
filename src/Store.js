import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      state = action.payload;
      break;
    default:
      return ''
  }
  return state;
}

const store = createStore(reducer, false);


store.subscribe(() => {

})


export default store
