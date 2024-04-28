import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Provider from './context/Provider.jsx';

import './css'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <BrowserRouter>
               <Provider>
                    <App />
               </Provider>
          </BrowserRouter>
     </React.StrictMode>,
);
