import {Component} from "react";
import {Badge, Button, Card} from "react-bootstrap";
import "./styles.scss";
import {ClockHistory, House} from "react-bootstrap-icons";

//Custom Card, used for summary of user selection
export default class CustomCard extends Component {
    render() {
        return (<Card className="customCardEnd" style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title className="cardTitleBig">Zusammenfassung</Card.Title>
                <Card.Subtitle className="cardSubTitle"></Card.Subtitle>
                <Card.Text className="cardText">
                </Card.Text>
                <Card.Title className="cardTitle">{this.props.item.title} <Badge className="badgeTitle"
                                                                                 pill>#{this.props.item.position}</Badge></Card.Title>
                <Card.Subtitle className="cardSubTitle"><House className="icon"/> {this.props.item.restaurant}{' '}
                    <ClockHistory className="icon"/> 30 min{' '}{' '}<Badge className="vegBadge" bg="secondary">{this.props.item.vegLabel}</Badge></Card.Subtitle>
                <Card.Text className="cardText">
                    {this.props.item.subtitle}
                </Card.Text>
                <Card.Text className="cardBadgeContainer">
                    <Badge className="cardBadge" bg="secondary">{this.props.item.category}</Badge>{' '}
                    <Badge className="cardBadge" bg="secondary">Preis: {this.props.item.price} €</Badge>
                    <Button href="https://hansimglueck-burgergrill.de/" variant="outline-danger" id="cardButton"
                            className="cardButtonRestaurant">{this.props.item.restaurant}</Button>
                    <Button href="https://www.lieferando.de/" variant="outline-danger" id="cardButton"
                            className="cardButtonLieferando">Lieferando.de</Button>
                    <Card.Title className="cardBottom">Liefy wünscht Guten Appetit!</Card.Title>
                </Card.Text>
            </Card.Body>
        </Card>)
    }
}

