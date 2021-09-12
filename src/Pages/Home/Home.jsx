import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  home, bgHeader, bgHeaderTwo, bgHeaderThree, text, actions, gear, gearItems,
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
            <Button type="primary" size="large">
              View Songs
            </Button>
          </Link>
          <Link to="/chords">
            <Button size="large">
              View Chords
            </Button>
          </Link>
        </div>

        <div className={gear}>
          <h2>What I use:</h2>
          <div className={gearItems}>
            <div>
              <a href="https://www.ibanez.com/eu/products/detail/grg170dx_2y_04.html">Guitar: Ibanez GRG170DX</a>
              <a href="https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-solo">Audio interface: Focusrite Solo</a>
            </div>
            <div>
              <a href="npx browserslist@latest --update-db
"
              >
                Amp Sim: Bias FX

              </a>
              <a href="https://orangeamps.com/products/guitar-amp-combos/crush-series/crush20rt/">Amp: Orange Crush 20RT</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
