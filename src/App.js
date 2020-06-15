import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AllEvent from "./Event/pages/AllEvent";
import NavigationBar from './Shared/Navigation/NavigationBar'
import CreateEvent from './Event/pages/CreateEvent'
const App = () => {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar/>
        <Switch>
          <Route path="/" component={AllEvent} exact/>
          <Route path="/createevent" component={CreateEvent} exact/>
          <Route path="/Login" component={AllEvent} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
