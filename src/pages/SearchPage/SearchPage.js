import React from "react";
import { v4 as uuidv4 } from "uuid";
import SearchTrack from "../../components/SearchTrack/SearchTrack";
import useSearchPage from "./hooks/useSearchPage";
import { Form, Label, Input, Button, List } from "./searchPageStyled";

const SearchPage = () => {
  const {
    searchList,
    inputHandler,
    submitHandler,
    searchQuery,
  } = useSearchPage();

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Label>Enter track name</Label>
        <Input type="text" value={searchQuery} onChange={inputHandler} />
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
