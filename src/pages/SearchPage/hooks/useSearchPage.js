import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import searchActions from "../../../redux/actions/searchActions";
import getSearchTracks from "../../../redux/operations/searchOperations";
import searchTracks from "../../../redux/selectiors/searchSelectors";

const useSearch = () => {
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
  const inputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return { submitHandler, searchQuery, searchList, inputHandler };
};

export default useSearch;
