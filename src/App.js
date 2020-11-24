import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";

import "./App.css";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </div>
);
export default App;
