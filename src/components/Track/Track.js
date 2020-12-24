import React from "react";
import {
  TrackItem,
  Title,
  ArtistTitle,
  ImgWrapper,
  Img,
  Url,
} from "./trackStyled";

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

export default Track;
