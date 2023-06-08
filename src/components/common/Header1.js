import React, { useState } from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
function Header1() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
          <Menu mode ='horizontal' defaultSelectedKeys={['home']}>
            <Menu.Item key="#home">Home </Menu.Item>
            <Menu.Item key="#about">About</Menu.Item>
            <Menu.Item key="#feature">Features</Menu.Item>
            <Menu.Item key="#works">How it works</Menu.Item>
            <Menu.Item key="#faq">FAQ</Menu.Item>
            <Menu.Item key="#pricing">Pricing</Menu.Item>
            <Menu.Item key="#contact">Contact</Menu.Item>

          </Menu>
      </div>
    </div>
  );
}

export default Header1;
