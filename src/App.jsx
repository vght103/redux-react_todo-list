import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./routes/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
