import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Track = ({ track }) => {
  const { name, url, artist, image } = track;

  return (
    <TrackItem>
      <Title> {name}</Title>
      <ArtistTitle
        id={artist.mbid}
        to={{
          pathname: `/artist/${artist.mbid}`,
        }}
      >
        {artist.name}
      </ArtistTitle>
      <ImgWrapper>
        <Img alt="immgMusic" src={image[0]["#text"]} />
      </ImgWrapper>
      <Url rel="noopener noreferrer" href={url} target="_blank ">
        See on website
      </Url>
    </TrackItem>
  );
};

const Url = styled.a`
  color: #8c8c8c;
  :hover {
    color: #262626;
  }
`;

const ArtistTitle = styled(Link)`
  margin-bottom: 10px;
  color: #a8071a;

  :hover {
    color: tomato;
  }
`;

const ImgWrapper = styled.div`
  margin-bottom: 10px;
`;

const Img = styled.img`
  margin: 0 auto;
`;

const TrackItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  width: 160px;
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

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 12px;
`;

export default Track;
