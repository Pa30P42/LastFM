import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Title,
  Img,
  TagWrapper,
  TagTitle,
  Tag,
  Content,
} from "./artistPageStyled";
import useArtis from "./hooks/useArtist";

const ArtistPage = () => {
  const { info, goBackFn } = useArtis();

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
