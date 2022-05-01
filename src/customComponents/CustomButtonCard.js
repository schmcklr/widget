//needed to render pictures
import {Component, useState} from "react";
import {Badge, Button, Card, ToggleButton,C} from "react-bootstrap";
import "./cards.scss";
import "./CustomButtonCard.scss";
import {ClockHistory, House} from "react-bootstrap-icons";
import {addResponseMessage, renderCustomComponent} from "react-chat-widget";
import CustomCard from "./CustomCard";

function ButtonClicked(item) {
    console.log(item.position)

   // addResponseMessage('Vielen Dank für die Nutzung von Liefy!')
    //addResponseMessage('Anbei findest du eine Zusammenfassung deiner Auswahl:')
    //renderCustomComponent(CustomCard, {item})

}

  function ToggleButtonExample(items) {
      let i;
      for (i = 0; i < items.length; i++) {
          const [checked, setChecked] = useState(false);

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
                      {i.title}
                  </ToggleButton>

              </>
          );
      }
  }

export default class CustomButtonCard extends Component {

 constructor(props) {
    super(props);
    this.state = {
      colorUp: 'secondary',
      colorDown:  'secondary',
      clicked: false
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp(event) {
  if (this.state.clicked === false) {
    this.setState({
      colorUp: 'success',
      clicked: true
    });
   }
  }

  handleDown(event) {
  if (this.state.clicked === false) {
    this.setState({
      colorDown: 'danger',
      clicked: true
    });
    }
  }








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




                  {this.props.items.map(item => (<Button variant="outline-danger" className="buttons" > {item} </Button>))}




            </Card.Body>
        </Card>)
    }
}



