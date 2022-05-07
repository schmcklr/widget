//needed to render pictures
import {Component, useState} from "react";
import {Badge, Button, Card, ToggleButton,C} from "react-bootstrap";
import "./cards.scss";
import "./CustomButtonCard.scss";
import {ClockHistory, House} from "react-bootstrap-icons";
import {addResponseMessage, addUserMessage, renderCustomComponent} from "react-chat-widget";
import CustomCard from "./CustomCard";
import {handleMessagesAndResponses} from "../MessagesAndResonses/MessagesAndResponses";
import {ToggleButtonExample} from "./Button";




let selectedItems = [];

function ButtonClicked(data, metaData) {
    let i;

    let responseText;
    //console.log(item.position)


    // addResponseMessage('Vielen Dank für die Nutzung von Liefy!')
    //addResponseMessage('Anbei findest du eine Zusammenfassung deiner Auswahl:')
    //renderCustomComponent(CustomCard, {item})

    if (data !== "closed") {

        selectedItems[selectedItems.length] = data;
    } else {
        responseText = metaData + '[';

        for (i = 0; i < selectedItems.length; i++) {

            if (i < selectedItems.length - 1) {

                responseText += ('"' + selectedItems[i] + '", ');
            } else {
                responseText += ('"' + selectedItems[i] + '"');
            }
        }

        responseText += ']}'

        addUserMessage(responseText);
        handleMessagesAndResponses(responseText);
        selectedItems = [];
    }
}


export default class CustomButtonCard extends Component {





    render() {


        return (


            <Card className="customCardEnd" style={{width: '18rem'}}>


            <Card.Body>
                <Card.Title className="buttonCardTitleBig"> <Badge className="buttonCardBadgeTitle" pill>{this.props.metaData[0].badge}</Badge>{' '}{this.props.metaData[0].title}</Card.Title>
                <Card.Subtitle className="cardSubTitle"></Card.Subtitle>
                <Card.Text className="cardText">

                </Card.Text>
                <Card.Title className="cardTitle"></Card.Title>
                <Card.Subtitle className="cardSubTitle">{this.props.metaData[0].subtitle}</Card.Subtitle>
                <Card.Text className="cardText">

                </Card.Text>
                <Card.Text className="cardBadgeContainer">



                </Card.Text>




                  {this.props.items.map(item => (<Button variant="outline-danger" className="buttons" onClick={() => ButtonClicked(item)} > {item} </Button>))}
                  <Button variant="outline-danger" className="buttons" onClick={() => ButtonClicked("closed", this.props.metaData[0].intent)} > Weiter </Button>




            </Card.Body>
        </Card>)
    }
}



