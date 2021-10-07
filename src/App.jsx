import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/login/Login";
import Home from "./routes/home/Home";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
