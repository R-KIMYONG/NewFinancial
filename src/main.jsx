import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { QueryClientSetup } from "./queryclient/QueryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientSetup>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientSetup>
  </React.StrictMode>
);
