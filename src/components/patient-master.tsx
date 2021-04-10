import React from 'react';
import Layout from './layout';
import FilteredPatientList from './filtered-patient-list';
import AddPatient from './add-patient';

/**
 * Master-view
 */
const PatientMaster: React.FC = () => {
  return (
    <Layout>
      <AddPatient />
      <FilteredPatientList />
    </Layout>
  );
};

export default PatientMaster;
