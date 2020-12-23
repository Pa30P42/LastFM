import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import routes from "./assets/routes/routes";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      <BackgroundWrapper>
        <Navigation />
        <Wrapper>
          <Switch>
            {routes.map((route) => (
              <Route key={route.label} {...route} />
            ))}
          </Switch>
        </Wrapper>
      </BackgroundWrapper>
    </Suspense>
  );
}

export default App;

const BackgroundWrapper = styled.div`
  background-color: #f0f5ff;
`;

const Wrapper = styled.div`
  width: 750px;
  margin: 0 auto;
`;
