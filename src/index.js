import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';

const rootReducer = (oldState = "Abdul", action) => {
    let newState = oldState;
    if (action.type === "GOODMORNING") {
        newState = action.data;
        return newState;
    } else if (action.type === "GOODAFTERNOON") {
        newState = action.data;
        return newState;
    } else {
        return newState;
    }
}

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log("New data is ", store.getState());
})
store.dispatch({ type: "GOODMORNING", data: "Abdul" })
store.dispatch({ type: "GOODAFTERNOON", data: "Asma" })
store.dispatch({ type: "GOODMORNING", data: "Ayesha" })


export const StateContext = createContext();

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <React.StrictMode>
        <StateContext.Provider value={store}>
            <App />
        </StateContext.Provider>
    </React.StrictMode>
)