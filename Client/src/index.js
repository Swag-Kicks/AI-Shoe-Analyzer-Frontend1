import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllContext from './context/AllContext';
import 'react-modal-video/scss/modal-video.scss';
import 'react-image-lightbox/style.css';
import './index.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
  <AllContext>
    <App />
  </AllContext>
</React.Fragment>
);
reportWebVitals();


