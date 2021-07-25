import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./fonts/avenir.otf";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import checkUser from "./utility/checkUser";

let persistor = persistStore(store);

checkUser();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
