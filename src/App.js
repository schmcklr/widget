import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from "./pages/Contact";

const Nav = () => <ul className="nav justify-content-center">
    <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
    </li>
    <li className="nav-item">
        <a className="nav-link disabled">Team</a>
    </li>
</ul>



function App() {
  return (
        <Router>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/contact" element={<Contact />}/>
            </Routes>
        </Router>

  );
};
export default App;
