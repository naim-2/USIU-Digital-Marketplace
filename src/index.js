import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./css/index.css"; 

import { render } from "react-dom";
render(<App />, document.getElementById("root"));

//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );