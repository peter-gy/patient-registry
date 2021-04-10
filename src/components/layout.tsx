import React from 'react';
import { Layout as AntLayout } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = AntLayout;

const Layout: React.FC = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header>
        <Link to="/">
          <h1 style={{ color: 'white' }}>Patient Registry</h1>
        </Link>
      </Header>
      <Content style={{ padding: 10 }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        Created by Péter Ferenc Gyarmati
      </Footer>
    </AntLayout>
  );
};

export default Layout;
