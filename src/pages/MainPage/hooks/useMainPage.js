import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTopList from "../../../redux/operations/topListOperations";
import topMusicChart from "../../../redux/selectiors/topListSelectors";

const useMain = () => {
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

  return { loadMore, chartList };
};

export default useMain;
