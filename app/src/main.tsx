import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { applyPolyfills, defineCustomElements } from 'components/loader';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

applyPolyfills().then(async ()=> {
  await defineCustomElements(window);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

});