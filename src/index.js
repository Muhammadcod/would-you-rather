import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "./assets/styles/main.scss";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(reducer, middleware);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
//  https://software.intel.com/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-windows
