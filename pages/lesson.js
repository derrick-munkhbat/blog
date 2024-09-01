import Navbar from "./navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Lesson() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="content">
          <Switch>
            <Route path="/lesson">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
  