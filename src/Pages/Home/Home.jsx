import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
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

    </>
  );
}
