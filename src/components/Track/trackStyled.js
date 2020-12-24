import styled from "styled-components";
import { Link } from "react-router-dom";

export const Url = styled.a`
  color: #8c8c8c;
  :hover {
    color: #262626;
  }
`;

export const ArtistTitle = styled(Link)`
  margin-bottom: 10px;
  color: #002329;
  font-size: 14px;

  :hover {
    color: tomato;
  }
`;

export const ImgWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Img = styled.img`
  margin: 0 auto;
`;

export const TrackItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  width: 160px;
  text-align: center;
  background-color: #f6ffed;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 12px;
`;
