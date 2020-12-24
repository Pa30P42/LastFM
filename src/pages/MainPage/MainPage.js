import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import Track from "../../components/Track/Track";
import getTopList from "../../redux/operations/topListOperations";
import topMusicChart from "../../redux/selectiors/topListSelectors";
import { Button, List } from "./mainPageStyled";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const chartList = useSelector(topMusicChart);
  const dispatch = useDispatch();

  const loadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (page === 1 && chartList.length > 0) {
      return;
    }
    dispatch(getTopList(page));
    // eslint-disable-next-line
  }, [dispatch, page]);

  return (
    <>
      <List>
        {chartList.map((track) => (
          <Track track={track} key={uuidv4()} />
        ))}
      </List>

      <Button onClick={loadMore}>Load more</Button>
    </>
  );
};
export default MainPage;
