import React from "react";

const SearchTrack = ({ track }) => {
  const { name, artist } = track;

  return (
    <li>
      <h3>Track name: {name}</h3>
      <p>Artist: {artist}</p>
    </li>
  );
};

export default SearchTrack;
