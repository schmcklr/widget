import {Component} from "react";
import {Badge, Button, Card, Carousel, ListGroup} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

import "./cards.scss";
import {CashCoin} from "react-bootstrap-icons";
export default class CustomCarousel extends Component {
    render() {
        return (<Carousel bsPrefix="customCarousel" className="customCarousel"  variant="dark" indicators={false} slide={false}>
            {this.props.items.map(item => (<Carousel.Item>
                    <Card style={{width: '15rem'}} bsPrefix="customCard" className="customCard">
                        <Card.Img variant="top" className="cardImage"
                                  src={item.src}/>
                        <Card.Body>
                            <Card.Title className="cardTitle">{item.title}</Card.Title>
                            <Card.Text className="cardText">
                                {item.describtion}
                            </Card.Text>
                            <Card.Text>
                                <Badge className="cardBadge" bg="secondary">Preis: {item.price}</Badge>{' '}
                                <Badge className="cardBadge" bg="secondary">{item.categorie}</Badge>{' '}
                                <Badge className="cardBadge" bg="secondary">{item.restaurant}</Badge>{' '}
                                <Badge className="cardBadge" bg="secondary">{item.categorie}</Badge>{' '}
                            </Card.Text>
                            <Button variant="outline-danger" className="cardButton">{item.button}</Button>{' '}
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            ))}
        </Carousel>)
    }

}

