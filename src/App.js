import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AllEvent from "./Event/pages/AllEvent";
import HomeEvent from "./Event/pages/HomeEvent";
import NavigationBar from './Shared/Navigation/NavigationBar'
import CreateEvent from './Event/pages/CreateEvent'
import UserSignIn from './User/pages/UserSignIn'
import UserSignUp from './User/pages/UserSignUp'
import EventDetail from './Event/components/EventDetail'
const App = () => {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar/>
        <Switch>
          <Route path="/" component={HomeEvent} exact/>
          <Route path="/event" component={AllEvent} exact/>
          <Route path="/createevent" component={CreateEvent} exact/>
          <Route path="/signin" component={UserSignIn} exact/>
          <Route path="/signup" component={UserSignUp} exact/>
          <Route path="/event/:eventId" component={EventDetail} exact/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
