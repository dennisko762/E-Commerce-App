import React from "react";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from "react-dom";
import App from "./Base/App";
import "./index.css";
import { LangProvider } from "./LangSwitchComponents/LangContext";
import { StateProvider } from "./Providers/StateProvider";
import reducer, { initialState } from "./reducers/reducer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(

  <LangProvider>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </LangProvider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
