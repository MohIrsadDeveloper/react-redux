import React from 'react'
import { createStore } from 'redux';

const rootReducer = (oldState={value : "Abdul"}, action) => {
    let newState = oldState;
    if (action.type === "abc") {
        newState.value = "Abdul Bari Idrisi";
        return newState;
    } else if (action.type === "xyz") {
        newState.value = "Asma"
        return newState;
    } else {
        return newState;
    }
}


const store = createStore(rootReducer)
console.log(store);
store.subscribe(() => console.log(store.getState()));

store.dispatch({type : "abc"})
store.dispatch({type : "abc"})
store.dispatch({type : "abc"})
store.dispatch({type : "xyz"})
store.dispatch({type : "xyz"})
store.dispatch({type : "xyz"})

const App = () => {
  return (
    <div>App</div>
  )
}

export default App