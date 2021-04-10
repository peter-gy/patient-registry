import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PatientProvider } from './context/PatientContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/patient-registry">
      <PatientProvider>
        <App />
      </PatientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
