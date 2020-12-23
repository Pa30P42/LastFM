import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Track from "../../components/Track/Track";
import getTopList from "../../redux/operations/topListOperations";
import topMusicChart from "../../redux/selectiors/topListSelectors";

const MainPage = () => {
  const chartList = useSelector(topMusicChart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopList(1));
    // eslint-disable-next-line
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
