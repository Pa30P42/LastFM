import React from "react";
import { v4 as uuidv4 } from "uuid";
import Track from "../../components/Track/Track";
import useMain from "./hooks/useMainPage";
import { Button, List } from "./mainPageStyled";

const MainPage = () => {
  const { loadMore, chartList } = useMain();

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
