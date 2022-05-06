//needed to render pictures
import {Component, useState} from "react";
import {Badge, Button, Card, ToggleButton,C} from "react-bootstrap";
import "./cards.scss";
import "./CustomButtonCard.scss";
import {ClockHistory, House} from "react-bootstrap-icons";
import {addResponseMessage, addUserMessage, renderCustomComponent} from "react-chat-widget";
import CustomCard from "./CustomCard";
import {handleMessagesAndResponses} from "../MessagesAndResonses/MessagesAndResponses";




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
        responseText = '/keep_on_category{';

        for (i = 0; i < selectedItems.length; i++) {

            if (i < selectedItems.length - 1) {

                responseText += ('{"cat_ent": "' + selectedItems[i] + '"},');
            } else {
                responseText += ('{"cat_ent": "' + selectedItems[i] + '"}');
            }
        }





        responseText += '}'

        addUserMessage(responseText);
        handleMessagesAndResponses(responseText);
        selectedItems = [];
    }
}


function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <>
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
    </>
  );
}



export default class CustomButtonCard extends Component {


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



                </Card.Text>




                  {this.props.items.map(item => (<Button variant="outline-danger" className="buttons" onClick={() => ButtonClicked(item)} > {item} </Button>))}
                  <Button variant="outline-danger" className="buttons" onClick={() => ButtonClicked("Weiter")} > Weiter </Button>




            </Card.Body>
        </Card>)
    }
}



