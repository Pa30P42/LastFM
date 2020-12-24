import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import getArtistInfo from "../../../redux/operations/artistInfoOperations";
import artistInfo from "../../../redux/selectiors/artistInfoSelector";

const useArtis = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const info = useSelector(artistInfo);

  const goBackFn = () => {
    history.push("/");
  };

  useEffect(() => {
    let id;
    id = location.pathname.split("/")[2];
    async function fetchData() {
      dispatch(await getArtistInfo(id));
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  return { info, goBackFn };
};

export default useArtis;
