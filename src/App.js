import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Wrapper } from "./appStyled";

import routes from "./assets/routes/routes";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      <Navigation />
      <Wrapper>
        <Switch>
          {routes.map((route) => (
            <Route key={route.label} {...route} />
          ))}
        </Switch>
      </Wrapper>
    </Suspense>
  );
}

export default App;
