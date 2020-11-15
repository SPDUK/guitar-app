import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchBucketFiles } from '../utils';

const GuitarContext = React.createContext();

/*
  export a function we can use instead of needing to import useContext & the context,
  instead just call const { state, setState } = useSomethingContext();
  */
function useGuitarContext() {
  return useContext(GuitarContext);
}

function GuitarProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [audioFiles, setAudioFiles] = useState({});
  const [currentSong, _setCurrentSong] = useState({ url: '', title: '' });

  useEffect(() => {
    (async () => {
      try {
        const files = await fetchBucketFiles();
        setAudioFiles(files);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function setCurrentSong(song) {
    // do nothing if same song
    if (song.url === currentSong.url) {
      return;
    }

    _setCurrentSong(song);
  }

  const value = {
    audioFiles,
    loading,
    error,
    currentSong,
    setCurrentSong,
  };

  return (
    <GuitarContext.Provider value={value}>
      {children}
    </GuitarContext.Provider>
  );
}

GuitarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useGuitarContext, GuitarProvider };
