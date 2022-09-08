import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App.js';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux';
import store from '../src/features/store'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> 
    </Provider>
  </React.StrictMode>
);

reportWebVitals();