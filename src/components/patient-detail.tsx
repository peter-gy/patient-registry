import React, { useContext } from 'react';
import { Descriptions, Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import Layout from './layout';
import { Patient } from '../interface';
import { PatientContext } from '../context/PatientContext';
import { useRouteMatch, useHistory } from 'react-router-dom';

const PatientDetailPage: React.FC = () => {
  const match = useRouteMatch<{ socialSecNum: string }>(
    '/patients/:socialSecNum'
  );

  const {
    state: { patients },
  } = useContext(PatientContext);

  const patientToDisplay = patients.find(
    (p) => p.socialSecNum === match?.params.socialSecNum
  );

  const history = useHistory();
  const onReturn = () => history.push('/');

  return (
    <Layout>
      <PatientDetail patient={patientToDisplay} />
      <Button
        style={{ marginTop: 10 }}
        onClick={onReturn}
        type="primary"
        size="large"
        icon={<RollbackOutlined />}
      />
    </Layout>
  );
};

type PatientDetailProps = {
  patient: Patient | undefined;
};

const PatientDetail: React.FC<PatientDetailProps> = ({ patient }) => {
  const history = useHistory();
  if (!patient) history.push('/not-found');
  return (
    <Descriptions title="Patient details" layout="vertical" bordered>
      <Descriptions.Item label="Social security number">
        {patient?.socialSecNum}
      </Descriptions.Item>
      <Descriptions.Item label="First name">
        {patient?.firstName}
      </Descriptions.Item>
      <Descriptions.Item label="Last name">
        {patient?.lastName}
      </Descriptions.Item>
      <Descriptions.Item label="Email address">
        {patient?.email}
      </Descriptions.Item>
      <Descriptions.Item label="Phone number">
        {patient?.phone}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default PatientDetailPage;
