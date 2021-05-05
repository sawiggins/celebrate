import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import WebFontLoader from 'webfontloader'
import App from './App';
import reportWebVitals from './reportWebVitals';

WebFontLoader.load({
  google: {
    families: [
      'ZillaSlab:400,700,latin-ext',
    ]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
