import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';
import { PlayCircleOutlined, SoundOutlined } from '@ant-design/icons';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { useGuitarContext } from '../../contexts/GuitarContext';
import {
  listItem, nowPlaying, titleContainer, date,
} from './song-list.module.scss';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function SongList({ list }) {
  const { currentSong, setCurrentSong } = useGuitarContext();

  const sortedListDesc = list.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());

  return (
    <>
      {sortedListDesc.map((song) => {
        const { url, lastModified, title } = song;
        const isCurrentSong = url === currentSong.url;
        return (
          <div
            className={`${listItem} ${isCurrentSong && nowPlaying}`}
            key={url}
            onClick={() => setCurrentSong(song)}
            onKeyPress={() => setCurrentSong(song)}
            role="menuitem"
            tabIndex="0"
          >
            <Button tabIndex="-1" icon={isCurrentSong ? <SoundOutlined /> : <PlayCircleOutlined />} type="link" />
            <span className={titleContainer}>
              {title}
            </span>
            <div className={date}>
              {timeAgo.format(new Date(lastModified), 'round')}
            </div>
          </div>
        );
      })}
    </>
  );
}

SongList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
