import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SearchTrack from "../../components/SearchTrack/SearchTrack";
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
    query && dispatch(getSearchTracks(query));
    // eslint-disable-next-line
  }, [history, location]);

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
      <form onSubmit={submitHandler}>
        <label>Enter track name</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <ul>
          {searchList
            ? searchList.map((track) => (
                <SearchTrack key={uuidv4()} track={track} />
              ))
            : "No result "}
        </ul>
      </div>
    </>
  );
};

export default SearchPage;
