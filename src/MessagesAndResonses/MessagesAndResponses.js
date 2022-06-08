//******************************************************************
    //Rest Api connection in use
    //******************************************************************
    // Used for submitting messages and getting responses
import {addResponseMessage, addUserMessage, renderCustomComponent, setQuickButtons} from "react-chat-widget";
import CustomCarousel from "../customComponents/CustomCarousel";
import CustomButtonCard from "../customComponents/CustomButtonCard";
import CustomImage from "../customComponents/CustomImage";
import {useState} from "react";
import {ToggleButton} from "react-bootstrap";

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
//handle user Message typed in via keyboard
    const handleNewUserMessage = (newMessage) => {
        handleMessagesAndResponses(newMessage)

        //TODO: Remove testing functions
        //renderCustomComponent(CustomCard, {text: newMessage})
        //addResponseMessage("Hallo");
        //addResponseMessage("Hallo was machst du gerade kann ich helfen");
        //renderCustomComponent(CustomCarousel, {items: items2});
        // renderCustomComponent(CustomButtonCard, {items: testButtons["label"]});
        //renderCustomComponent(CustomCardGroup, {text: newMessage})
        // renderCustomComponent(CustomCard, {text: newMessage})
        //renderCustomComponent(CustomCarousel, {text: newMessage})
    }




    // function which checks message type of Bot Response
    export function botResponse(jsonData) {
        let i;
        let j;
        let items = [];
        for (i = 0; i < jsonData.length; i++) {
            if (jsonData[i].hasOwnProperty('custom')) {
                setQuickButtons([]);

                console.log(jsonData[i])
                //console.log(jsonData[i].custom)
                //console.log(jsonData[i]['custom'].data[0])
                //console.log(jsonData[i]['custom'].data[0].description)


                //checks if message is from type "choose"
                if (jsonData[i]['custom'].payload.match(/choose.*/)) {
                    let items = [];
                    let metaData = [];

                    for (j = 0; j < jsonData[i]['custom']['buttons'].length; j++) {
                        items[j] = jsonData[i]['custom']['buttons'][j].title;
                    }

                    metaData = [{
                        badge: jsonData[i]['custom']['meta_data'].Badge,
                        intent: jsonData[i]['custom']['meta_data'].intent,
                        subtitle: jsonData[i]['custom']['meta_data'].subtitle,
                        title: jsonData[i]['custom']['meta_data'].title
                    }];

                    renderCustomComponent(CustomButtonCard, {items: items, metaData: metaData});
                }
                else if (jsonData[i]['custom'].payload.match(/dishes_selection.*/)) {
                    let dishes = [];



                //checks if message is from type "carousel"
                for (j = 1; j < jsonData[i]['custom']['data'].length; j++) {
                    dishes [j] =
                        {
                            title: jsonData[i]['custom']['data'][j].title,
                            subtitle: jsonData[i]['custom']['data'][j].subtitle,
                            image: jsonData[i]['custom']['data'][j].picture,
                            category: jsonData[i]['custom']['data'][j].orientation,
                            price: jsonData[i]['custom']['data'][j].price,
                            restaurant: jsonData[i]['custom']['data'][j].restaurant_id,
                            button: "Wählen",
                            position: j
                        };
                }
                renderCustomComponent(CustomCarousel, {items: dishes})

                /*
                    renderCustomComponent(CustomCarousel, {description: jsonData[i]['custom'].data[0].description,
                        src: jsonData[i]['custom'].data[0].image, title: jsonData[i]['custom'].data[0].title,
                        button: jsonData[i]['custom'].data[0].buttons[0].title})

                 */
                }}
               // renderCustomComponent(CustomCarousel, {text: jsonData[i] })
                //console.log(jsonData[i])
                //handleButtons(jsonData[i].buttons)

            //checks if message is from type "buttons"
            else if (jsonData[i].hasOwnProperty('buttons')) {

                if(jsonData[i].hasOwnProperty('text')){
                    addResponseMessage(jsonData[i].text)
                }
                handleButtons(jsonData[i].buttons)
            }

            //checks if message is from type "image"
            else if (jsonData[i].hasOwnProperty("image")) {
                handleImages(jsonData[i].image)
            }

            //checks if message is from type "text" - default case
            else {
                console.log(jsonData[i].text)
                addResponseMessage(jsonData[i].text)
            }
        }
    }

    // handle bot response: basic buttons
    export function handleButtons(jsonData) {

        let i;
        let buttons = [];

        for (i = 0; i < jsonData.length; i++) {
            buttons[i] = {
                label: jsonData[i].title,
                value: jsonData[i].payload,
            };
        }
        setQuickButtons(buttons);
    }

    // handle bot response: Images
    export function handleImages(jsonData) {
        console.log(jsonData)
        renderCustomComponent(CustomImage, {src: jsonData})
    }

