import {Component} from "react";
import {Badge, Button, Card, ToggleButton, C} from "react-bootstrap";
import "./cards.scss";
import "./CustomButtonCard.scss";
import {addUserMessage} from "react-chat-widget";
import {handleMessagesAndResponses} from "../MessagesAndResonses/MessagesAndResponses";

let selectedItems = [];

//function called if button is clicked
function ButtonClicked(data, metaData) {
    let i;
    let responseText;
    //path as long as user still chooses, selection will be stored in selectedItems array
    if (data !== "closed") {
        selectedItems[selectedItems.length] = data;
    }
    //path when user selection is finished, response text generation
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
        //show users selection in the widget
        addUserMessage("schreibt...")
        //addUserMessage(responseText);
        //sends message back to BE
        handleMessagesAndResponses(responseText);
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
                                                               onClick={() => ButtonClicked(item)}> {item} </Button>))}
                        <Button variant="outline-danger" className="closedButtons"
                                onClick={() => ButtonClicked("closed", this.props.metaData[0].intent)}> Weiter </Button>
                    </Card.Text>
                </Card.Body>
            </Card>)
    }
}



