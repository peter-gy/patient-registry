import React, { useState, useContext } from 'react';
import {
  Row,
  Col,
  Tooltip,
  Button,
  Modal,
  notification,
  Form,
  Input,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Patient } from '../interface';
import { PatientContext } from '../context/PatientContext';
import { addPatient } from '../actions/PatientActions';

/**
 * Handles the 'ADD' action dispatching
 */
const AddPatient = () => {
  const { dispatch } = useContext(PatientContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const onAdd = (patient: Patient) => {
    dispatch(addPatient(patient));
    setIsModalVisible(false);
  };
  const handleCancel = () => setIsModalVisible(false);
  return (
    <>
      <Row justify="space-around" align="middle" style={{ marginBottom: 10 }}>
        <Col>
          <Tooltip title="Add New Patient">
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<PlusOutlined />}
              onClick={showModal}
            />
          </Tooltip>
        </Col>
      </Row>
      <AddPatientModal
        visible={isModalVisible}
        onAdd={onAdd}
        onCancel={handleCancel}
      />
    </>
  );
};

type Props = {
  visible: boolean;
  onAdd: (patient: Patient) => void;
  onCancel: () => void;
};

/**
 * Defines the modal and the form for creating patients
 */
const AddPatientModal: React.FC<Props> = ({ visible, onAdd, onCancel }) => {
  const [form] = Form.useForm();
  const onOk = () => {
    form
      .validateFields()
      .then((patient) => {
        form.resetFields();
        onAdd(patient);
      })
      .catch((info) => {
        notification['error']({
          message: 'Validation Error',
          description: JSON.stringify(info),
        });
      });
  };
  const itemNoEmptyRule = (label: string) => ({
    required: true,
    message: `Please input the ${label} of the patient!`,
  });
  return (
    <Modal
      visible={visible}
      title="Add New Patient"
      okText="Add Patient"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form form={form} layout="vertical" name="add_patient_form">
        <Form.Item
          name="firstName"
          label="First name"
          rules={[itemNoEmptyRule('first name')]}
        >
          <Input placeholder="John" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last name"
          rules={[itemNoEmptyRule('last name')]}
        >
          <Input placeholder="Doe" />
        </Form.Item>
        <Form.Item
          name="socialSecNum"
          label="Social security number"
          rules={[itemNoEmptyRule('social security number')]}
        >
          <Input placeholder="8440135432" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email address"
          rules={[itemNoEmptyRule('email address')]}
        >
          <Input placeholder="john.doe@domain.com" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone number"
          rules={[itemNoEmptyRule('phone number')]}
        >
          <Input placeholder="478-722-8413" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddPatient;
