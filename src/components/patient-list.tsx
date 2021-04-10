import React, { useContext } from 'react';
import { List, Avatar, Skeleton, Tooltip } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { Patient } from '../interface';
import { PatientContext } from '../context/PatientContext';
import { deletePatient } from '../actions/PatientActions';
import { useHistory } from 'react-router-dom';

type ListProps = {
  patients: Patient[];
};

/**
 * Displays a list of patients
 */
const PatientList: React.FC<ListProps> = ({ patients }) => {
  return (
    <>
      <List
        pagination={{ pageSize: 7 }}
        size="small"
        dataSource={patients}
        renderItem={(item) => <PatientItem patient={item} />}
      />
    </>
  );
};

type ItemProps = {
  patient: Patient;
};

/**
 * Displays a single patient
 */
const PatientItem: React.FC<ItemProps> = ({ patient }) => {
  const { dispatch } = useContext(PatientContext);
  const patientName = `${patient.firstName} ${patient.lastName}`;
  const onDelete = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation(); // stop the default 'show detail' behaviour
    dispatch(deletePatient(patient.socialSecNum));
  };

  const history = useHistory();
  const onClick = () => history.push(`/patients/${patient.socialSecNum}`);
  return (
    <List.Item
      actions={[
        <Tooltip title="Delete">
          {<DeleteTwoTone onClick={onDelete} style={{ fontSize: 24 }} />}
        </Tooltip>,
      ]}
      onClick={onClick}
    >
      <Skeleton avatar title={false} loading={false} active>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://eu.ui-avatars.com/api/?background=074075&color=fff&name=${patientName}`}
              alt={patientName}
            />
          }
          title={patientName}
          description={patient.socialSecNum}
        />
      </Skeleton>
    </List.Item>
  );
};

export default PatientList;
