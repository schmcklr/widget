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
import button from "bootstrap/js/src/button";




let selectedItems = [];

function ButtonClicked(item) {
    let i;
    let responseText;
    console.log(item.position)


    // addResponseMessage('Vielen Dank für die Nutzung von Liefy!')
    //addResponseMessage('Anbei findest du eine Zusammenfassung deiner Auswahl:')
    //renderCustomComponent(CustomCard, {item})

    if (item !== "Weiter") {

        selectedItems[selectedItems.length] = item;
    } else {
        responseText = '/keep_on_category{"cat_ent": [';

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

function hallo () {

    this.props.items.map(item => (ToggleButtonExample()))


}



export default class Test extends Component {




    render() {


        return (


            <Card className="customCardEnd" style={{width: '18rem'}}>


            <Card.Body>
                <Card.Title className="buttonCardTitleBig"> <Badge className="buttonCardBadgeTitle" pill>Schritt 1:</Badge> Wähle deine Kategorie</Card.Title>
                <Card.Subtitle className="cardSubTitle"></Card.Subtitle>
                <Card.Text className="cardText">

                </Card.Text>
                <Card.Title className="cardTitle"></Card.Title>
                <Card.Subtitle className="cardSubTitle">Wähle bis zu 3 Richtung aus</Card.Subtitle>
                <Card.Text className="cardText">

                </Card.Text>
                <Card.Text className="cardBadgeContainer">


                    {this.props.items.map(item => ((<ToggleButton />)))}

                </Card.Text>


                  <Button variant="outline-danger" className="buttons" onClick={() => ButtonClicked("Weiter")} > Weiter </Button>




            </Card.Body>
        </Card>)
    }
}