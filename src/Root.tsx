import logo from "./logo.svg";
import "./App.css";
import Room from "./pages/Room";
import Main from "./pages/Main";
import Session from "./pages/Session";
import ToSession from "./pages/ToSession";
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import RecordGoals from "./pages/RecordGoals";
import SessionThanks from "./pages/SessionThanks";

export default function Root() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/session" exact component={ToSession} />
          <Route path="/session/:type" exact component={Session} />
          <Route
            path="/session/go/record-goals"
            exact
            component={RecordGoals}
          />
          <Route path="/session/room/:id" exact component={Room} />
          <Route path="/exit-session/thanks" exact component={SessionThanks} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
