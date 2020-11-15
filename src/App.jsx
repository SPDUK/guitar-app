import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { ThunderboltTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import { useGuitarContext } from './contexts/GuitarContext';

import Songs from './Pages/Songs/Songs';
import Chords from './Pages/Chords/Chords';
import Home from './Pages/Home/Home';

const { Content, Sider, Footer } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const { loading, error, currentSong } = useGuitarContext();

  // TODO: better loading/errors
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<ThunderboltTwoTone twoToneColor="#A9A9A9" />}>
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
        <Layout className="site-layout" theme="dark">
          <Content style={{ padding: 20, background: '#181818' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/songs" component={Songs} />
              <Route path="/chords" component={Chords} />
            </Switch>
          </Content>
          <Footer style={{ padding: 0 }}>
            <AudioPlayer
              header={<div className="audio-player-header">{currentSong.title}</div>}
              src={currentSong.url}
              volume={0.6}
            />
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
