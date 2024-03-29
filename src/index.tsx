import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {appStore} from "./store/AppStore";

ReactDOM.render(
    <Provider store={appStore}>
        <App/>
    </Provider>, document.getElementById("root"));