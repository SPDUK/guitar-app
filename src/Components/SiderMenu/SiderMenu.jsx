import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { HomeOutlined, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

const { Sider } = Layout;

export default function SiderMenu() {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const { pathname } = useLocation();

  // this should probably be part of a routing config somehwere, but since there's very few pages it's fine for laziness purposes
  function getDefaultKey() {
    if (pathname.includes('/songs')) return '2';
    if (pathname.includes('/chords')) return '3';
    return '1';
  }

  return (
    <Sider style={{ zIndex: 1000 }} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <Menu theme="dark" defaultSelectedKeys={getDefaultKey()} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined twoToneColor="#A9A9A9" />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<HeartTwoTone twoToneColor="#A9A9A9" />}>
          <Link to="/songs">Songs</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<CheckCircleTwoTone twoToneColor="#A9A9A9" />}>
          <Link to="/chords">Chords</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
