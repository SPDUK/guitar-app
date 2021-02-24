import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  home, bgHeader, bgHeaderTwo, bgHeaderThree, text, actions,
} from './home.module.scss';
import { ReactComponent as BgHeader } from '../../images/bg-header.svg';
import { ReactComponent as BgHeaderTwo } from '../../images/bg-header-2.svg';
import { ReactComponent as BgHeaderThree } from '../../images/bg-header-3.svg';

export default function Home() {
  return (
    <>
      <BgHeader className={bgHeader} />
      <BgHeaderTwo className={bgHeaderTwo} />
      <BgHeaderThree className={bgHeaderThree} />

      <div className={home}>

        <div className={text}>
          <h1>Welcome to my guitar site.</h1>
          <h5>This is where I upload random guitar audio clips to show off how bad I am at guitar.</h5>
        </div>

        <div className={actions}>
          <Link to="/songs">
            <Button type="primary">
              View Songs
            </Button>
          </Link>
          <Link to="/chords">
            <Button type="primary">
              View Chords
            </Button>
          </Link>

        </div>
      </div>
    </>
  );
}
