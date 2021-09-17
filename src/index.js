import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom' 
import {Provider} from './context/Authentication'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider>
                      <App/>
        </Provider>
        {/* <AuthPtovider>
        </AuthPtovider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
