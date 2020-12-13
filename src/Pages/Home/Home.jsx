import React from 'react';
import { Link } from 'react-router-dom';
import { home } from './home.module.scss';

export default function Home() {
  return (
    <div className={home}>
      <h1>
        <Link to="/songs">
          View Songs
        </Link>
      </h1>

      <br />
      <h1>
        <Link to="/chords">
          View Chords
        </Link>
      </h1>
    </div>
  );
}
