import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import routes from "./assets/routes/routes";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Wrapper>
      <Suspense fallback={<h1>...loading</h1>}>
        <Navigation />

        <Switch>
          {routes.map((route) => (
            <Route key={route.label} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 750px;
  margin: 0 auto;
`;
