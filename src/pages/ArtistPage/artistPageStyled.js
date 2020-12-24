import styled from "styled-components";

export const Content = styled.p`
  text-align: justify;
  color: #8c8c8c;
  line-height: 24px;
`;

export const Button = styled.button`
  width: 100px;

  margin-bottom: 20px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  outline: 0;
  border: 0;
  background-color: #08979c;
  color: #fff;

  :hover {
    background-color: #87e8de;
  }
`;

export const TagWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Tag = styled.li`
  background-color: #002329;
  color: #fff;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 6px;
`;

export const TagTitle = styled.div`
  font-size: 24px;
  font-weight: 800px;
  color: #08979c;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-size: 40px;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  color: #08979c;
`;
