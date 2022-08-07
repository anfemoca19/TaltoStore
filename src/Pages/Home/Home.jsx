import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
export default function Home() {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" component={Sidebar} />
      </Router>
    </div>
  );
}
