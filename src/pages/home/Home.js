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
import "./home.scss";
import * as PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
//import custom components
import CustomCarousel from "../../customComponents/CustomCarousel";
import CustomCard from "../../customComponents/CustomCard";
import CustomImage from "../../customComponents/CustomImage";
import {Accordion, Badge, Button, Card, Carousel, Col, Container, ListGroup, Placeholder, Row} from "react-bootstrap";
import {handleMessagesAndResponses} from "../../MessagesAndResonses/MessagesAndResponses";


//TODO: Restructure Code maybe in seperate files and not all function in the home.js (Norman)
//TODO: After the button clicked and send to BE no responses are coming -> fix

const Home = () => {


    // handle user Message typed in via keyboard
    const handleNewUserMessage = (newMessage) => {
        handleMessagesAndResponses(newMessage)
    }

// function that is triggerd if a button is clicked
    const handleQuickButtonClicked = (value) => {
        handleMessagesAndResponses(value)
        setQuickButtons([]);
    }


    return (
        <div className="container">
            <div className="row">
                <h1 className="text-left p-5"><br/>Liefy die Lieferbox <Badge bg="secondary">Beta</Badge>
                </h1>
                <hr/>
                <br/>
                <Row>
                    <h2>Wie funktioniert Liefy?</h2>
                    <hr/>
                    <p>Du bist dir unschlüssig was du gerne essen möchtest und hast weder Zeit noch Lust lange durch
                        zahlreiche Gerichte zu stöbern? Dann ist Liefy wie für dich gemacht!
                        Öffne das Chat Widget in der rechten unteren Ecke und beginne eine Unterhaltung. Unsere Liefy
                        wird dich Schritt für Schritt in einem interaktiven Dialog zu deinem Wunschgericht führen! Alles
                        was du dafür tun musst, ist, Liefy deine Lieblingszutaten und Präferenzen zu verraten. Sie wird
                        dir schließlich eine individuelle Auswahl an idealen Gerichten für dich vorschlagen, und das
                        ganz schnell und einfach.
                        Also, lass deinen Magen nicht knurren - Liefy wartet schon auf dich!
                    </p>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Zeitersparnis</Accordion.Header>
                            <Accordion.Body>
                                Der Kunde weiß nicht genau, was er essen möchte und kann sich an den Chatbot wenden,
                                ohne lange auf der Website suchen zu müssen bis er ein passendes Gericht gefunden hat -
                                der Kunde bekommt ein individuelles Gericht einfach und schnell von dem Chatbot
                                vorgeschlagen.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Beratungsservice</Accordion.Header>
                            <Accordion.Body>
                                Der Kunde fühlt sich nicht allein gelassen in der Entscheidungsfindung und erhält
                                Unterstützung von unserem Chatbot. Wie in einem echten Restaurant vor Ort, bei dem man
                                den Kellner oder den Küchenchef nach einer Empfehlung fragen kann, dient unser Chatbot
                                als persönlicher Berater und erhöht dadurch die Servicequalität.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>24h-Service</Accordion.Header>
                            <Accordion.Body>
                                Der Kunde kann sich innerhalb von 24h jederzeit an den Chatbot wenden und somit rund um
                                die Uhr bei der Essensbestellung beraten werden, was einen Vorteil gegenüber einem
                                menschlichen Berater darstellt.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Sicherheit</Accordion.Header>
                            <Accordion.Body>
                                Der Kunde kann sich aufgrund der Automatisierung und der konstanten Datenbasis auf die
                                Beraterqualität des Chatbots verlassen, dass dieser ihn korrekt berät, indem er 1. nur
                                Gerichte mit gewünschten Zutaten des Kunden vorschlägt, 2. keine Ungewissheit
                                vorherrscht, dass Allergene bei einem menschlichen Berater übersehen werden könnten und
                                3. von dem Kunden ein Gericht bestellt wird, in dem sich Allergene befinden könnten, von
                                denen der Kunde nichts wusste oder nichts geahnt hätte.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Kostenersparnis</Accordion.Header>
                            <Accordion.Body>
                                Der Kunde kann sich hinsichtlich der Beratung an den Chatbot wenden und es muss kein
                                Mitarbeiter eingestellt werden, der online für die Beratung zur Verfügung steht, um mit
                                dem Kunden zu chatten, sodass Personalkosten eingespart werden.
                            </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                    </Accordion>
                    <br/>
                </Row>
                <Row style={{placeItems: "center"}}>
                    <br/> <br/>
                    <h2 style={{alignItems: "center"}}>Weitere Vorteile</h2>
                    <hr/>
                    Neben diesen fünf großartigen Funktionen ist ein weiterer Vorteil, dass unser Chat Widget modular
                    entwickelt wurde, sodass es dadurch flexibel auf jeder Website integrierbar / implementierbar ist
                    und sofort genutzt werden kann. Ebenso kann das Corporate Design beliebig angepasst werden, sodass
                    die optische Aufmachung perfekt auf jede Food-Website passt!
                    <br/>
                </Row>
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

