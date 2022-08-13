import React from "react";
import ReactDOM from "react-dom";
import App from "./05-redux/App";
import { Provider } from "react-redux";
import { store, persistor } from "./05-redux/redux/store";

import { PersistGate } from 'redux-persist/integration/react'; //持久化
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate  loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);
