import React from 'react';

import { useGuitarContext } from '../../contexts/GuitarContext';
import SongList from '../../Components/SongList/SongList';

export default function Chords() {
  const {
    audioFiles: { chords },
  } = useGuitarContext();
  return (
    <div>
      <h1>Chords</h1>
      <SongList list={chords} />
    </div>
  );
}
