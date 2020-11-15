import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import { useGuitarContext } from './contexts/GuitarContext';

import SiderMenu from './Components/SiderMenu/SiderMenu';
import Songs from './Pages/Songs/Songs';
import Chords from './Pages/Chords/Chords';
import Home from './Pages/Home/Home';

const { Content, Footer } = Layout;

function App() {
  const { loading, error, currentSong } = useGuitarContext();

  // TODO: better loading/errors
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu />
        <Layout className="site-layout" theme="dark">
          <Content style={{ padding: 20, background: '#181818' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/songs" component={Songs} />
              <Route path="/chords" component={Chords} />
            </Switch>
          </Content>
          <Footer style={{ padding: 20, background: '#1f1f1f' }}>
            <AudioPlayer
              header={<div className="audio-player-header">{currentSong.title}</div>}
              src={currentSong.url}
              volume={0.6}
              style={{ boxShadow: 'none' }}
            />
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
