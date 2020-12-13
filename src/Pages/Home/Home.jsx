import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { home } from './home.module.scss';

export default function Home() {
  return (
    <div className={home}>
      <h1>
        <Link to="/songs">
          <Button type="primary">
            View Songs
          </Button>
        </Link>
      </h1>

      <br />
      <h1>
        <Link to="/chords">
          <Button type="primary">
            View Chords
          </Button>
        </Link>
      </h1>
    </div>
  );
}
