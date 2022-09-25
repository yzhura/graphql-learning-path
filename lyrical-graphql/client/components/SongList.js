import React from "react";
import { useQuery, gql } from '@apollo/client';

const SongList = () => {
  
  const { loading, data } = useQuery(GET_SONGS);
  
  if (loading) {
    return null;
  }

  const renderSongs = () => {
    return data.songs.map((song) => <li key={song.id} className="collection-item">{song.title}</li>);
  };

  return (
    <div>
      <h2>SongList</h2>
      <ul className="collection"> {renderSongs()}</ul>
    </div>
  );
};

const GET_SONGS = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default SongList;
