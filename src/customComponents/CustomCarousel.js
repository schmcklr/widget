import {Component} from "react";
import {Badge, Button, Card, Carousel, ListGroup, Row} from "react-bootstrap";


import "./cards.scss";


import {ArrowRight, House, } from 'react-bootstrap-icons';
import {ClockHistory} from "react-bootstrap-icons";
import {addUserMessage} from "react-chat-widget";



//handleButtonClicked
function handleButtonClicked(payload) {
    console.log(payload)
    addUserMessage(payload)
}

export default class CustomCarousel extends Component {


    render() {
        return (<Carousel className="customCarousel" interval={null} variant="dark" indicators={false} slide={false}>
            {this.props.items.map(item => (<Carousel.Item>
                    <Card style={{width: '15rem'}} className="customCard">
                        <Card.Img variant="top" className="cardImage"
                                  src={item.src}/>
                        <Card.Body>
                            <Card.Title className="cardTitle">{item.title}</Card.Title>
                            <Card.Subtitle className="cardSubTitle"><House className="icon"/> {item.restaurant}{' '}
                                <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                            <Card.Text className="cardText">
                                {item.describtion}
                            </Card.Text>
                            <Card.Text className="cardBadgeContainer">
                                <Badge className="cardBadge" bg="secondary">{item.categorie}</Badge>{' '}
                                <Badge className="cardBadge" bg="secondary">Preis: {item.price}</Badge>{' '}
                            </Card.Text>
                            <Button variant="outline-danger" id="cardButton" className="cardButton"
                                    onClick={() => handleButtonClicked(item.button)}>{item.button}</Button>{' '}
                        </Card.Body>
                    </Card>
                </Carousel.Item>

            ))}
        </Carousel>)
    }

}

