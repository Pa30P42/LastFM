import React from "react";
import { TrackItem, Title, Artist } from "./searchTrackStyled";

const SearchTrack = ({ track }) => {
  const { name, artist } = track;

  return (
    <TrackItem>
      <Title>{name}</Title>
      <Artist> {artist}</Artist>
    </TrackItem>
  );
};

export default SearchTrack;
