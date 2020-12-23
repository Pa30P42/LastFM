import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import getArtistInfo from "../../redux/operations/artistInfoOperations";
import artistInfo from "../../redux/selectiors/artistInfoSelector";

const ArtistPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const info = useSelector(artistInfo);

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
      <p>{bio && bio.content}</p>
    </>
  );
};

const TagWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  text-align: center;
  margin-bottom: 30px;
`;

const Tag = styled.li`
  background-color: #613400;
  color: #fff;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 6px;
`;

const TagTitle = styled.div`
  font-size: 24px;
  font-weight: 800px;
  color: #876800;
  margin-bottom: 20px;
`;

const Img = styled.img`
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 40px;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  color: #876800;
`;

export default ArtistPage;
