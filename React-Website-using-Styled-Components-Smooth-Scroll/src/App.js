import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideBar />
      <NavBar />
    </Router>
  );
}

export default App;
