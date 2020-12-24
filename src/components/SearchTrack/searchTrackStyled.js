import styled from "styled-components";

export const Title = styled.h3`
  color: #b5f5ec;
  font-weight: 400;
`;

export const Artist = styled.p`
  color: #ffffff;
  font-weight: 800;
`;

export const TrackItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  text-align: center;
  background-color: #00474f;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
