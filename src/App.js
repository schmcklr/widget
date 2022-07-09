import './App.css';
import {
    Route,
    Routes
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from "./pages/contact/Contact";
import Team from "./pages/Team";
import {Container, Nav, Navbar} from "react-bootstrap";

//Navigation bar
const Navigation = () => {
    return (
        <>
            <Navbar fixed='top' bg="dark" variant="dark" color='rgba(174,0,0,1)'>
                <Container>
                    <Navbar.Brand href="/">Liefy</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
//App function
function App() {
    return (
        <div className="App2">
            <Navigation/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/team" element={<Team/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
}
export default App;
