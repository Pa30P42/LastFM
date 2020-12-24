import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  margin: 0 auto;
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

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
