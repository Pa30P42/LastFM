import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import getArtistInfo from "../../redux/operations/artistInfoOperations";
import artistInfo from "../../redux/selectiors/artistInfoSelector";

const ArtistPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const info = useSelector(artistInfo);

  let id;

  useEffect(async () => {
    id = location.pathname.split("/")[2];
    dispatch(await getArtistInfo(id));
    console.log("id", id);
  }, [id]);

  const { name, image, tags, bio } = info;
  return (
    <>
      <h3>{name}</h3>
      <div>
        <img alt="artistIMG" src={image && image[5]["#text"]} />
      </div>
      <ul>
        Tags:
        {tags && tags.tag.map((tag) => <li key={uuidv4()}>{tag.name}</li>)}
      </ul>
      <p>{bio && bio.summary}</p>
    </>
  );
};

export default ArtistPage;
