import {Component, useEffect} from "react";
import {
    Widget,
    addResponseMessage,
    setQuickButtons,
    addUserMessage,
    renderCustomComponent,
    handleQuickButtonClicked
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./Home.css"
import "./styles.scss";
import * as PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
//import custom components
import CustomCardGroup from "../../customComponents/CustomCardGroup";
import CustomCarousel from "../../customComponents/CustomCarousel";
import CustomCard from "../../customComponents/CustomCard";
import CustomImage from "../../customComponents/CustomImage";
import {Accordion, Badge, Button, Card, Col, Container, ListGroup, Placeholder, Row} from "react-bootstrap";
import {ClockHistory, House} from "react-bootstrap-icons";
import CustomButtonCard from "../../customComponents/CustomButtonCard";
import Test from "../../customComponents/Test";
import {ResumeTypes, TestTest, ToggleButtonExample} from "../../customComponents/Button";
import {handleMessagesAndResponses} from "../../MessagesAndResonses/MessagesAndResponses";


//TODO: Restructure Code maybe in seperate files and not all function in the home.js (Norman)
//TODO: After the button clicked and send to BE no responses are coming -> fix

const Home = () => {


    // handle user Message typed in via keyboard
    const handleNewUserMessage = (newMessage) => {
        handleMessagesAndResponses(newMessage)

        //TODO: Remove testing functions
        //renderCustomComponent(CustomCard, {text: newMessage})
        //addResponseMessage("Hallo");
        //addResponseMessage("Hallo was machst du gerade kann ich helfen");
        // renderCustomComponent(CustomCarousel, {items: items2});
        //renderCustomComponent(Test, {items: items2});
        // renderCustomComponent(ToggleButtonExample, {items: testButtons})
        // renderCustomComponent(CustomCard, {text: newMessage})
        // renderCustomComponent(TestTest, {text: newMessage})
    }

// function that is triggerd if a button is clicked
    const handleQuickButtonClicked = (value) => {
        addUserMessage("schreibt...")
        console.log(value)
        handleMessagesAndResponses(value)

        //TODO: removes all buttons, in some cases that should not be the case because mor options can be selected, how can we identify?
        //setQuickButtons([]);
    }


    return (
        <div className="container">
            <div className="row">
                <h1 className="text-left p-5"><br/>Liefy die Lieferbox <Badge bg="secondary">Beta</Badge>
                </h1>
                <hr/>
                <br/>
                    <Row>
                            <h2 >Wie funktioniert Liefy?</h2>
                            <hr/>
                            <p>Du bist dir unschlüssig was du gerne essen möchtest und hast weder Zeit noch Lust lange durch zahlreiche Gerichte zu stöbern? Dann ist Liefy wie für dich gemacht!
Öffne das Chat Widget in der rechten unteren Ecke und beginne eine Unterhaltung. Unsere Liefy wird dich Schritt für Schritt in einem interaktiven Dialog zu deinem Wunschgericht führen! Alles was du dafür tun musst, ist, Liefy deine Lieblingszutaten und Präferenzen zu verraten. Sie wird dir schließlich eine individuelle Auswahl an idealen Gerichten für dich vorschlagen, und das ganz schnell und einfach.
Also, lass deinen Magen nicht knurren - Liefy wartet schon auf dich!
</p>


                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Beratung &nbsp; <Badge
                                        bg="secondary">New</Badge></Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Persönlichkeit</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Einzigartig</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Zeitsparend</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Persönlichkeit</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                   <br/>
                                 </Accordion>

</Row>
                    <Row style={{placeItems: "center"}}>


                        <h2 style={{alignItems: "center"}}>Wähle dein Gericht</h2>
                            <hr/>

                       <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayerisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        <Card className="customCardEnd" style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title className="buttonCardTitleBig"> <Badge className="buttonCardBadgeTitle" pill>Schritt 1:</Badge>{' '}Protein
                    </Card.Title>
                    <Card.Subtitle className="cardSubTitle"></Card.Subtitle>
                    <Card.Text className="cardText">
                    </Card.Text>
                    <Card.Title className="cardTitle"></Card.Title>
                    <Card.Subtitle className="cardSubTitle">Wähle deine Präferenzen</Card.Subtitle>
                    <Card.Text className="cardText">
                    </Card.Text>
                    <Card.Text className="cardBadgeContainer">
                       <Button variant="outline-danger" className="buttons">Linse</Button>
                        <Button variant="outline-danger" className="buttons">Tofu</Button>
                        <Button variant="outline-danger" className="buttons">Fleisch</Button>
                        <Button variant="outline-danger" className="buttons">Fisch</Button>
                        <Button variant="outline-danger" className="buttons">Bohne</Button>
                        <Button variant="outline-danger" className="closedButtons"> Weiter </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
                        <h6>h6. Bootstrap heading</h6>

                        </Row>


                <br/>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam blanditiis cum debitis
                    facilis ipsum magnam praesentium qui quo ratione soluta tempora ullam, unde vero voluptatibus. Alias
                    enim placeat quisquam.</p>

            </div>



            <div className="Widget">
                <Widget handleNewUserMessage={handleNewUserMessage}
                        handleQuickButtonClicked={handleQuickButtonClicked}
                        initPayload={"/get_started"}
                        customData={{"language": "de"}}
                        params={{'storage': 'session'}}
                        title={"Liefy"}
                        subtitle={""}
                        emojis={'NO'}
                        senderPlaceHolder={"Schreibe eine Nachricht..."}
                        showTimeStamp={false}
                    //resizable={'NO'}
                />
            </div>
        </div>
    );
};


export default Home;

