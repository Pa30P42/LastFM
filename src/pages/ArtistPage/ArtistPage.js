import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import getArtistInfo from "../../redux/operations/artistInfoOperations";
import artistInfo from "../../redux/selectiors/artistInfoSelector";
import {
  Button,
  Title,
  Img,
  TagWrapper,
  TagTitle,
  Tag,
  Content,
} from "./artistPageStyled";

const ArtistPage = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const info = useSelector(artistInfo);

  const goBackFn = () => {
    history.push("/");
  };

  useEffect(() => {
    let id;
    id = location.pathname.split("/")[2];
    async function fetchData() {
      dispatch(await getArtistInfo(id));
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  const { name, image, tags, bio } = info;
  return (
    <>
      <Button onClick={goBackFn}> Go back</Button>
      <Title>{name}</Title>
      <div>
        <Img alt="artistIMG" src={image && image[5]["#text"]} />
      </div>

      <TagWrapper>
        <TagTitle>Tags:</TagTitle>
        <ul>
          {tags && tags.tag.map((tag) => <Tag key={uuidv4()}>{tag.name}</Tag>)}
        </ul>
      </TagWrapper>
      <Content>{bio && bio.content}</Content>
    </>
  );
};

export default ArtistPage;
