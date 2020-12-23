import React from "react";
import { Link } from "react-router-dom";

const Track = ({ track }) => {
  const { name, url, artist, image } = track;

  return (
    <li>
      <h3> {name}</h3>
      <Link
        id={artist.mbid}
        to={{
          pathname: `/artist/${artist.mbid}`,
        }}
      >
        {artist.name}
      </Link>
      <div>
        <img alt="immgMusic" src={image[0]["#text"]} />
      </div>
      <p>{url}</p>
    </li>
  );
};

export default Track;
