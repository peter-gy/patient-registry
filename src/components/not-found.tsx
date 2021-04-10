import React from 'react';
import { Row, Col, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Layout from './layout';
import { Link } from 'react-router-dom';

/**
 * Master-view
 */
const NotFound: React.FC = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Col>
          <h1>Page Not Found</h1>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col>
          <Link to="/">
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<HomeOutlined />}
            />
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default NotFound;
