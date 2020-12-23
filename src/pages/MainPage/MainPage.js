import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Track from "../../components/Track/Track";

import getTopList from "../../redux/operations/topListOperations";
import topListSelectors from "../../redux/selectiors/topListSelectors";

const MainPage = () => {
  const chartList = useSelector(topListSelectors.topMusicChart);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(await getTopList(1));
  }, []);

  return (
    <ul>
      {chartList.map((track) => (
        <Track track={track} key={uuidv4()} />
      ))}
    </ul>
  );
};

export default MainPage;
