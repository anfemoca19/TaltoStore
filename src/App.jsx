import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/login.jsx";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Login} />
        {/* <Route path="/home" component={Home} /> */}
      </Router>
    </div>
  );
}

export default App;
