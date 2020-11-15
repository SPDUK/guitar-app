import React from 'react';

import { useGuitarContext } from '../../contexts/GuitarContext';
import SongList from '../../Components/SongList/SongList';

export default function Songs() {
  const {
    audioFiles: { songs },
  } = useGuitarContext();

  return (
    <div>
      <h1>Songs</h1>
      <SongList list={songs} />
    </div>
  );
}
