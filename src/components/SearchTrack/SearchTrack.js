import React from "react";
import styled from "styled-components";

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

const Title = styled.h3`
  color: #cf1322;
  font-weight: 400;
`;

const Artist = styled.p`
  color: #262626;
  font-weight: 800;
`;

const TrackItem = styled.li`
  /* height: 120px; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  /* width: 160px; */
  text-align: center;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
