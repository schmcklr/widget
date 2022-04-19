import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from "./pages/Contact";
import {Container, Nav, Navbar} from "react-bootstrap";


/*
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

*/


const Navigation = () => {
    return (
        <>
            <Navbar fixed='top' bg="dark" variant="dark" color='rgba(174,0,0,1)'>
                <Container>
                    <Navbar.Brand href="/">Liefy</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )


}

function App() {
    return (
        <div className="App2">
            <Navigation/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App;
