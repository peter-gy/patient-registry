import React, { useContext, useEffect, useState, useRef } from 'react';
import { Row, Col, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PatientList from './patient-list';
import { Patient } from '../interface';
import { PatientContext } from '../context/PatientContext';

/**
 * Wraps a PatientList and takes care of the filtering functionality
 */
const FilteredPatientList: React.FC = () => {
  // Load Patients from the context
  const {
    state: { patients },
  } = useContext(PatientContext);
  // Use a different state to display filtered patients
  const [displayedPatients, setDisplayedPatients] = useState(patients);
  // Get a ref to the input field to use its value when a new patient is added
  const lastNameInputRef = useRef<Input>(null);

  // not passing a predicate as a parameter, as only querying by last name is required
  const getFilteredPatients = (
    patients: Patient[],
    query = lastNameInputRef.current?.state.value
  ): Patient[] => {
    return query
      ? patients.filter((p) =>
          p.lastName.toLowerCase().includes(query.toLowerCase())
        ) // filter list with case-insensitive check
      : patients; // return all the patients on undefined query string
  };

  // Update the list of displayed patients when the context changes
  useEffect(() => {
    setDisplayedPatients(getFilteredPatients(patients));
  }, [patients]);

  return (
    <>
      <Row justify="space-around" align="middle" style={{ marginBottom: 10 }}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 20 }}
          md={{ span: 16 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 4 }}
        >
          <Input
            ref={lastNameInputRef}
            placeholder="Search by last name..."
            prefix={<UserOutlined />}
            onChange={(event) =>
              setDisplayedPatients(
                getFilteredPatients(patients, event.target.value)
              )
            }
          />
        </Col>
      </Row>
      <Row justify="space-around" align="middle">
        <Col span={24}>
          <PatientList patients={displayedPatients} />
        </Col>
      </Row>
    </>
  );
};

export default FilteredPatientList;
