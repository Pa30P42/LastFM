import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 200px;
  margin: 0 auto;
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

export const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  width: 300px;
  padding-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #08979c;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 300px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #08979c;
  display: block;
`;
