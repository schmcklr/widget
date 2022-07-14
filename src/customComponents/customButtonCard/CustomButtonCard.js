import {Component} from "react";
import {Badge, Button, Card} from "react-bootstrap";
import "../styles.scss";
import "./customButtonCard.scss";
import {handleMessagesAndResponses} from "../../messagesAndResonses/MessagesAndResponses";

//stores selected items
let selectedItems = [];

//function called if button is clicked
function ButtonClicked(data, metaData) {
    let i;
    let responseText;
    //user still chooses, selection will be stored in selectedItems array
    if (data !== "next") {
        selectedItems[selectedItems.length] = data;
        //adds css class so that button stays selected
        let myElement = document.getElementById(data);
        myElement.classList.add("selectedButtons");
    }

    //user selection is finished, response text generation - intent for BE
    else {
        responseText = metaData + '[';
        for (i = 0; i < selectedItems.length; i++) {
            if (i < selectedItems.length - 1) {
                responseText += ('"' + selectedItems[i] + '", ');
            } else {
                responseText += ('"' + selectedItems[i] + '"');
            }
        }
        responseText += ']}'

        //sends message back to BE
        handleMessagesAndResponses(responseText);
        //deletes all items from array
        selectedItems = [];
    }
}

//Custom Card with Buttons, used for all selections
export default class CustomButtonCard extends Component {
    render() {
        return (
            <Card className="customCardEnd" style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title className="buttonCardTitleBig"> <Badge className="buttonCardBadgeTitle" pill>{this.props.metaData[0].badge}</Badge>{' '}{this.props.metaData[0].title}
                    </Card.Title>
                    <Card.Subtitle className="cardSubTitle"></Card.Subtitle>
                    <Card.Text className="cardText">
                    </Card.Text>
                    <Card.Title className="cardTitle"></Card.Title>
                    <Card.Subtitle className="cardSubTitle">{this.props.metaData[0].subtitle}</Card.Subtitle>
                    <Card.Text className="cardText">
                    </Card.Text>
                    <Card.Text className="cardBadgeContainer">
                        {this.props.items.map(item => (<Button id={item} variant="outline-danger" className="buttons"
                                                               onClick={() => {ButtonClicked(item)}}> {item} </Button>))}
                        <Button variant="outline-danger" className="nextButton"
                                onClick={() => ButtonClicked("next", this.props.metaData[0].intent)}> Weiter </Button>
                    </Card.Text>
                </Card.Body>
            </Card>)
    }
}



