import {Component, useEffect} from "react";
import {
    Widget,
    addResponseMessage,
    setQuickButtons,
    addUserMessage,
    renderCustomComponent,
    handleQuickButtonClicked
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./Home.css"
import "./styles.scss";
import * as PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
//import custom components
import CustomCardGroup from "../../customComponents/CustomCardGroup";
import CustomCarousel from "../../customComponents/CustomCarousel";
import CustomCard from "../../customComponents/CustomCard";
import CustomImage from "../../customComponents/CustomImage";
import {Accordion, Badge, Button, Card, Col, Container, ListGroup, Placeholder, Row} from "react-bootstrap";
import {ClockHistory, House} from "react-bootstrap-icons";
import CustomButtonCard from "../../customComponents/CustomButtonCard";


//TODO: Restructure Code maybe in seperate files and not all function in the home.js (Norman)
//TODO: After the button clicked and send to BE no responses are coming -> fix

const Home = () => {

    //******************************************************************
    //Rest Api connection in use
    //******************************************************************

    // Used for submitting messages and getting responses
    export function handleMessagesAndResponses(newMessage) {

        //********************POST*********************
        // POST request using fetch() (currently used for sending/receiving messages)
        fetch("http://localhost:5005/webhooks/rest/webhook", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                sender: "test_user",
                //message which was typed in via keyboard
                message: newMessage
            }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            // Converting to JSON
            .then(response => response.json()
            )

            // Displaying results in chat widget

            // Display text in widget
            //.then(json => addResponseMessage(json[0].text))
            // Used for texting: display text in console
            //.then(json => console.log(json))
            .then(function (json) {
                let jsonData
                jsonData = json
                console.log(json)
                botResponse(jsonData)
                //TODO: Remove development functions

            });
    }



    //TODO: REMOVE

    let testButtons = [{
                label: 'Test',
                value: 'Test',
            },
    {
                label: 'Deutsch',
                value: 'Test',
            },{
                label: 'Amerikanisch',
                value: 'Test',
            },{
                label: 'Bayrisch',
                value: 'Test',
            },{
                label: 'Nichts',
                value: 'Test',
            },{
                label: 'Alles',
                value: 'Test',
            },{
                label: 'Test',
                value: 'Test',
            },{
                label: 'Test',
                value: 'Test',
            },{
                label: 'Test',
                value: 'Test',
            },{
                label: 'Test',
                value: 'Test',
            },{
                label: 'Test',
                value: 'Test',
            }];

    setQuickButtons(testButtons);




    let items2 = [
        {
            'title': 'Schnitzel Wiener Art',
            'categorie': 'bayerisch',
            'price': '13,80 €',
            'describtion': 'Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit Zitronenschnitz und Preiselbeeren, mit gebackenen Kartoffelstaberln',
            'src': 'https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s=',
            'button': 'Wählen',
            'restaurant': 'Hans im Glück',
            'position': '1'
        },
        {
            'title': 'Knusper-Wels',
            'categorie': 'bayerisch',
            'price': '13,80 €',
            'describtion': 'Im Sesam-Knuspermantel gebackenen Filets vom Wels, mit Zitronenschnitz, Remouladensoße  und gebackenen Kartoffelstaberln',
            'src': 'https://pbs.twimg.com/media/CyhKCHwXcAAatJw?format=jpg&name=small',
            'button': 'Wählen',
            'restaurant': 'Namaste',
            'position': '2'

        },
        {
            'title': 'goodbye',
            'categorie': 'bayerisch',
            'price': '13,80 €',
            'describtion': 'Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit Zitronenschnitz und Preiselbeeren, mit gebackenen Kartoffelstaberln',
            'src': 'https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s=',
            'button': 'Wählen',
            'restaurant': 'Kfc',
            'position': '3'
        },

    ]


    // handle user Message typed in via keyboard
    const handleNewUserMessage = (newMessage) => {
        handleMessagesAndResponses(newMessage)

        //TODO: Remove testing functions
        //renderCustomComponent(CustomCard, {text: newMessage})
        addResponseMessage("Hallo");
        addResponseMessage("Hallo was machst du gerade kann ich helfen");
        renderCustomComponent(CustomCarousel, {items: items2});
       renderCustomComponent(CustomButtonCard, {items: testButtons["label"]});
        //renderCustomComponent(CustomCardGroup, {text: newMessage})
       // renderCustomComponent(CustomCard, {text: newMessage})
        //renderCustomComponent(CustomCarousel, {text: newMessage})
    }




    // function which checks message type of Bot Response
    function botResponse(jsonData) {
        let i;
        let j;
        let items = [];
        console.log(jsonData)
        for (i = 0; i < jsonData.length; i++) {
            //TODO: REMOVE
            console.log(jsonData[i])

            //buttons
            if (jsonData[i].hasOwnProperty('custom')) {

                //console.log(jsonData[i])
                //console.log(jsonData[i].custom)
                //console.log(jsonData[i]['custom'].data[0])
                //console.log(jsonData[i]['custom'].data[0].description)


                //Handle Custom Button functions
                //TODO: Send reply in following syntax: "/keep_on_category" + '{"cat_ent"'':' + " " + '"' + i + '"' + "}}"
                //TODO: f.e.: /keep_on_category{"cat_ent": "amerikanisch"}{"cat_ent": "spanisch"}...

                if (jsonData[i]['custom'].payload === "choose_category") {

                    let buttons = [];

                    for (j = 0; j < jsonData[i]['custom']['buttons'].length; j++) {


                        buttons[j] = jsonData[i]['custom']['buttons'][j].title
                    }



                    renderCustomComponent(CustomButtonCard, {items: buttons});


                }










                //Handle Custom Json messages
                //Handle custom carrousel
                for (j = 0; j < jsonData[i]['custom'].data.length; j++) {


                }

                renderCustomComponent(CustomCarousel, {items: items})


                /*
                    renderCustomComponent(CustomCarousel, {description: jsonData[i]['custom'].data[0].description,
                        src: jsonData[i]['custom'].data[0].image, title: jsonData[i]['custom'].data[0].title,
                        button: jsonData[i]['custom'].data[0].buttons[0].title})

                 */
                }
               // renderCustomComponent(CustomCarousel, {text: jsonData[i] })
                //console.log(jsonData[i])
                //handleButtons(jsonData[i].buttons)

            else if (jsonData[i].hasOwnProperty('buttons')) {

                if(jsonData[i].hasOwnProperty('text')){
                    addResponseMessage(jsonData[i].text)
                }
                console.log('TEst')
                console.log(jsonData[i].buttons)
                handleButtons(jsonData[i].buttons)
            }

            //pictures
            else if (jsonData[i].hasOwnProperty("image")) {
                handleImages(jsonData[i].image)
            }

                //TODO: Handle Pictures and Text separately, searching for an identifier
            //text
            else {
                console.log(jsonData[i].text)
                addResponseMessage(jsonData[i].text)
            }
        }
    }

    // handle bot response button
    function handleButtons(jsonData) {

        let i;
        let buttons = [];

        for (i = 0; i < jsonData.length; i++) {

            console.log(jsonData[i].title)
            buttons[i] = {
                label: jsonData[i].title,
                value: jsonData[i].payload,
            };
        }
        setQuickButtons(buttons);
    }







    // function that is triggerd if a button is clicked
    const handleQuickButtonClicked = (value) => {
        addUserMessage(value)
        console.log(value)
        handleMessagesAndResponses(value)

        //TODO: removes all buttons, in some cases that should not be the case because mor options can be selected, how can we identify?
        //setQuickButtons([]);
    }

    // handle bot response Images
    function handleImages(jsonData) {
        console.log(jsonData)
        renderCustomComponent(CustomImage, {src: jsonData})
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-left p-5"><br/>Liefy die Lieferbox <Badge bg="secondary">Beta</Badge>
                </h1>
                <hr/>
                <br/>
                    <Row>
                            <h2 >Wie funktioniert Liefy?</h2>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam blanditiis cum
                                debitis
                                facilis ipsum magnam praesentium qui quo ratione soluta tempora ullam, unde vero
                                voluptatibus. Alias
                                enim placeat quisquam.</p>


                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Beratung &nbsp; <Badge
                                        bg="secondary">New</Badge></Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item defaultActiveKey={['0']}>
                                    <Accordion.Header>Persönlichkeit</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item defaultActiveKey={['0']}>
                                    <Accordion.Header>Einzigartig</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item defaultActiveKey={['0']}>
                                    <Accordion.Header>Zeitsparend</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                   <br/>
                                 </Accordion>

</Row>
                    <Row style={{placeItems: "center"}}>


                        <h2 style={{alignItems: "center"}}>Wähle dein Gericht</h2>
                            <hr/>

                       <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayerisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                         <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayerisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                         <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayerisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                         <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayrisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                         <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayrisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                         <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayrisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                     <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayrisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{width: '15em'}} className="websiteCustomCard">
                                <Card.Img variant="top" className="cardImage"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Schnitzel Wiener Art<Badge className="badgeTitle"
                                                                                          pill>New</Badge></Card.Title>
                                    <Card.Subtitle className="cardSubTitle"><House
                                        className="icon"/> Hans im Glück{' '}
                                        <ClockHistory className="icon"/> 30 min</Card.Subtitle>
                                    <Card.Text className="cardText">
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text className="cardBadgeContainer">
                                        <Badge className="cardBadge" bg="secondary">bayrisch</Badge>{' '}
                                        <Badge className="cardBadge" bg="secondary">Preis: 13,50€ </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </Row>

                <br/>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam blanditiis cum debitis
                    facilis ipsum magnam praesentium qui quo ratione soluta tempora ullam, unde vero voluptatibus. Alias
                    enim placeat quisquam.</p>

            </div>

            <div className="d-flex justify-content-around">
                <Container>
                    <Row>
                        <Col>
                            <Card style={{width: '25rem', margin: '12px', whiteSpace: 'pre-wrap'}}>
                                <Card.Img variant="top"
                                          src="https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s="/>
                                <Card.Body>
                                    <Card.Title>Schnitzel Wiener Art</Card.Title>
                                    <Card.Text>
                                        Vom Schweinerücken in der Panko-Panade, in Butterschmalz gebacken, mit
                                        Zitronenschnitz und
                                        Preiselbeeren, mit gebackenen Kartoffelstaberln
                                    </Card.Text>
                                    <Card.Text>
                                        <Badge bg="success">fettig</Badge>{' '}<Badge
                                        bg="danger">deftig</Badge>{' '}<Badge
                                        bg="secondary">gebacken</Badge>{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '25rem', margin: '12px'}}>
                                <Card.Img variant="top"
                                          src="https://hansimglueck-burgergrill.de/fileadmin/_processed_/8/d/csm_wilder-westen-neu_e5e0d47e22.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        </Row>
                    <Row>
                        <Col>
                            <Card style={{width: '25rem', margin: '12px'}}>
                                <Card.Img variant="top"
                                          src="https://hansimglueck-burgergrill.de/fileadmin/_processed_/8/d/csm_wilder-westen-neu_e5e0d47e22.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '25rem', margin: '12px'}}>
                                <Card.Img variant="top"
                                          src="https://hansimglueck-burgergrill.de/fileadmin/_processed_/8/d/csm_wilder-westen-neu_e5e0d47e22.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>

        </div>


            <div className="Widget">
                <Widget handleNewUserMessage={handleNewUserMessage}
                        handleQuickButtonClicked={handleQuickButtonClicked}
                        initPayload={"/get_started"}
                        customData={{"language": "de"}}
                        params={{'storage': 'session'}}
                        title={"Liefy"}
                        subtitle={""}
                        emojis={'NO'}
                        senderPlaceHolder={"Schreibe eine Nachricht..."}
                        showTimeStamp={false}
                    //resizable={'NO'}
                />
            </div>
        </div>
    );
};


export default Home;

export class handleMessagesAndResponses {
}