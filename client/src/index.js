import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import datastore from "./redux/datastore";
import {ChakraProvider} from "@chakra-ui/react";
import {ComponentPreviews, useInitial} from "./dev";

const theme = {
    fontSizes: {
        lg: '18px',
    },
    colors: {
        black: {
            100: '#000000',
        },
    },
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
              <Provider store={datastore}>
                  <ChakraProvider useInitialHook={useInitial}>
                          <App/>
                  </ChakraProvider>
              </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
