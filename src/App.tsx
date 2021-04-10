import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PatientMaster from './components/patient-master';
import PatientDetailPage from './components/patient-detail';
import NotFound from './components/not-found';

import './styles/App.css';

/**
 * Master-view
 */
const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={PatientMaster} />
      <Route path="/patients/:socialSecNum" component={PatientDetailPage} />
      <Route path="/not-found" component={NotFound} />
      <Route component={PatientMaster} />
    </Switch>
  );
};

export default App;
