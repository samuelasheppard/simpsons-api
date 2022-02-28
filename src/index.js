import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GETINPUT": {
      const input = action.data;
      const filtered = [...state.simpsons];
      const newList = filtered.filter((item) => {
        if (item.character.toLowerCase().includes(input.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      return { ...state, filtered: newList };
    }

    case "DELETE": {
      if (state.filtered && state.filtered.length > 0) {
        let filtered = [...state.filtered];
        filtered.splice(action.index, 1);
        return { ...state, filtered };
      } else {
        let simpsons = [...state.simpsons];
        simpsons.splice(action.index, 1);
        return { ...state, simpsons };
      }
    }

    case "STOREDATA": {
      return { ...state, simpsons: action.payload };
    }

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
