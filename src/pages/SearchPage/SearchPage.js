import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SearchTrack from "../../components/SearchTrack/SearchTrack";
import searchActions from "../../redux/actions/searchActions";
import getSearchTracks from "../../redux/operations/searchOperations";
import searchTracks from "../../redux/selectiors/searchSelectors";

const SearchPage = () => {
  const searchList = useSelector(searchTracks);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = history.location.search.split("=")[1];
    // console.log("query", query);
    query && dispatch(getSearchTracks(query));
  }, [dispatch, history, location]);

  useEffect(() => {
    return () => {
      dispatch(searchActions.deleteSearchList());
    };
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push({
      pathname: location.pathname,
      search: `query=${searchQuery}`,
    });

    setSearchQuery("");
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Label>Enter track name</Label>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>

      <div>
        <List>
          {searchList
            ? searchList.map((track) => (
                <SearchTrack key={uuidv4()} track={track} />
              ))
            : "No result "}
        </List>
      </div>
    </>
  );
};

export default SearchPage;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 200px;
  margin: 0 auto;
  display: block;
  padding: 10px;
  border-radius: 4px;
  outline: 0;
  border: 0;
  background-color: #ff4d4f;
  color: #fff;

  :hover {
    background-color: #5c0011;
  }
`;

const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  width: 300px;
  padding-left: 15px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 300px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #874d00;
  display: block;
`;
