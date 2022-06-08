import {Component, useEffect, useState} from "react";
import {Badge, Button, Card, Carousel, Dropdown, DropdownButton, Form, ListGroup, Row} from "react-bootstrap";
import "./cards.scss";
import {House} from 'react-bootstrap-icons';
import {ClockHistory} from "react-bootstrap-icons";
import {addResponseMessage, addUserMessage, renderCustomComponent} from "react-chat-widget";
import CustomCard from "./CustomCard";


//function called if button is clicked
function handleButtonClicked(item) {
    console.log(item.position)
    addResponseMessage('Vielen Dank für die Nutzung von Liefy!')
    addResponseMessage('Anbei findest du eine Zusammenfassung deiner Auswahl:')
    renderCustomComponent(CustomCard, {item})
}

//Custom Carousel, used for displaying the recommended dishes
export default class CustomCarousel extends Component {
    render() {
        return (<Carousel className="customCarousel" interval={null} variant="dark" indicators={false} slide={false}>
            {this.props.items.map(item => (<Carousel.Item>
                    <Card style={{width: '15rem'}} className="customCard">
                        <Card.Img variant="top" className="cardImage"
                                  src={item.image}/>
                        <Card.Body>
                            <Card.Title className="cardTitle">{item.title} <Badge className="badgeTitle"
                                                                                  pill>#{item.position}</Badge></Card.Title>
                            <Card.Subtitle className="cardSubTitle"><House className="icon"/> {item.restaurant}{' '}
                                <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                            <Card.Text className="cardText">
                                {item.describtion}
                            </Card.Text>
                            <Card.Text className="cardBadgeContainer">
                                <Badge className="cardBadge" bg="secondary">{item.category}</Badge>{' '}
                                <Badge className="cardBadge" bg="secondary">Preis: {item.price}</Badge>
                            </Card.Text>
                            <Button variant="outline-danger" id="cardButton" className="cardButton"
                                    onClick={() => handleButtonClicked(item)}>{item.button}</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            ))}
        </Carousel>)
    }
}
