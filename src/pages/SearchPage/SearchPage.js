import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SearchTrack from "../../components/SearchTrack/SearchTrack";
import searchActions from "../../redux/actions/searchActions";
import getSearchTracks from "../../redux/operations/searchOperations";
import searchTracks from "../../redux/selectiors/searchSelectors";
import { Form, Label, Input, Button, List } from "./searchPageStyled";

const SearchPage = () => {
  const searchList = useSelector(searchTracks);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = history.location.search.split("=")[1];
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
