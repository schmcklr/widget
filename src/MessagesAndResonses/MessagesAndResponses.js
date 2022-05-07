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
        addResponseMessage("Hallo");
        addResponseMessage("Hallo was machst du gerade kann ich helfen");
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
        console.log(jsonData)
        for (i = 0; i < jsonData.length; i++) {
            //TODO: REMOVE
            console.log(jsonData[i])

            //buttons
            if (jsonData[i].hasOwnProperty('custom')) {
                setQuickButtons([]);

                //console.log(jsonData[i])
                //console.log(jsonData[i].custom)
                //console.log(jsonData[i]['custom'].data[0])
                //console.log(jsonData[i]['custom'].data[0].description)


                //Handle Custom Button functions
                //TODO: Send reply in following syntax: "/keep_on_category" + '{"cat_ent"'':' + " " + '"' + i + '"' + "}}"
                //TODO: f.e.: /keep_on_category{"cat_ent": "amerikanisch"}{"cat_ent": "spanisch"}...

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










                else{


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
                }}
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
    export function handleButtons(jsonData) {

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



    // handle bot response Images
    export function handleImages(jsonData) {
        console.log(jsonData)
        renderCustomComponent(CustomImage, {src: jsonData})
    }

