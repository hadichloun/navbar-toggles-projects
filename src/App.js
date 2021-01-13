import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./styles.css";

const tabs = [
  {
    title: "Toggle",
    path: "/Toggle"
    // <Route exact path="Toggle" component={Toggle} />
  },
  {
    title: "shrink&grow",
    path: "/shrink&grow"
  },
  {
    title: "push",
    path: "/push"
  }
];

function Tabs() {
  return (
    <div className="App">
      {tabs.map((tab) => (
        <NavLink to={tab.path} activeClassName="selected">
          {tab.title}
        </NavLink>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Tabs />
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route path="/Toggle" render={() => <div>toggle</div>} />
        <Route path="/shrink&grow" render={() => <div>shrink&grow</div>} />
        <Route path="/push" render={() => <div>push me around</div>} />
      </Switch>
    </Router>
  );
}
