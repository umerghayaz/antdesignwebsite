import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header1 from './components/common/Header1';
import Apphero from './components/home/Apphero';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Header1/>
      </Header>
      <Content>
      <Apphero/>
      </Content>
            
    </Layout>
  );
}

export default App;
