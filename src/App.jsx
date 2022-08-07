import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Holme from "./Pages/Home/Home";
import Register from "./Pages/Register/register";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/" component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
