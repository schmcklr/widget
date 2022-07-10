//MessagesAndResponses is used for information exchange between FE and BE
import {addResponseMessage, addUserMessage, renderCustomComponent, setQuickButtons} from "react-chat-widget";
import CustomCarousel from "../customComponents/CustomCarousel";
import CustomButtonCard from "../customComponents/customButtonCard/CustomButtonCard";
import CustomImage from "../customComponents/CustomImage";

export function handleMessagesAndResponses(newMessage) {
    // POST request using fetch() (used for sending/receiving messages)
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
        .then(function (json) {
            let jsonData
            jsonData = json
            botResponse(jsonData)
        });
}


// function which checks message type of Bot Response
export function botResponse(jsonData) {
    let i;
    let j;
    let items = [];
    for (i = 0; i < jsonData.length; i++) {
        if (jsonData[i].hasOwnProperty('custom')) {

             let button = [];
        button[0] = {
            label: 'Neustart',
            value: '/restart',
        };
        setQuickButtons(button);
    }
            //setQuickButtons([]);

            //checks if message is from type "choose" (used for all user selection)
            if (jsonData[i]['custom'].payload.match(/choose.*/)) {
                let items = [];
                let metaData = [];
                //generates array with all buttons
                for (j = 0; j < jsonData[i]['custom']['buttons'].length; j++) {
                    items[j] = jsonData[i]['custom']['buttons'][j].title;
                }
                //generates array with all Metadata
                metaData = [{
                    badge: jsonData[i]['custom']['meta_data'].Badge,
                    intent: jsonData[i]['custom']['meta_data'].intent,
                    subtitle: jsonData[i]['custom']['meta_data'].subtitle,
                    title: jsonData[i]['custom']['meta_data'].title
                }];
                //Method to render a custom component inside the messages container (provided by react-chat-widget)
                renderCustomComponent(CustomButtonCard, {items: items, metaData: metaData});
            }

            //checks if message is from type "carousel" (used for dishes selection)
            else if (jsonData[i]['custom'].payload.match(/dishes_selection.*/)) {
                let dishes = [];
                for (j = 1; j < jsonData[i]['custom']['data'].length; j++) {
                    //generates array with all dishes
                    dishes [j] =
                        {
                            title: jsonData[i]['custom']['data'][j].title,
                            subtitle: jsonData[i]['custom']['data'][j].subtitle,
                            image: jsonData[i]['custom']['data'][j].picture,
                            category: jsonData[i]['custom']['data'][j].orientation,
                            price: jsonData[i]['custom']['data'][j].price,
                            vegLabel: jsonData[i]['custom']['data'][j].veg_label,
                            restaurant: jsonData[i]['custom']['data'][j].restaurant_id,
                            button: "Wählen",
                            position: j
                        };
                }
                //method to render a custom component inside the messages container (provided by react-chat-widget)
                renderCustomComponent(CustomCarousel, {items: dishes})
            }
        }

        //checks if message is from type "buttons"
        else if (jsonData[i].hasOwnProperty('buttons')) {
            if (jsonData[i].hasOwnProperty('text')) {
                //method to add a new message written as a response to a user input (provided by react-chat-widget)
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
            //method to add a new message written as a response to a user input (provided by react-chat-widget)
            addResponseMessage(jsonData[i].text)
        }
    }
}

// handle bot response: basic buttons
export function handleButtons(jsonData) {
    let i;
    let buttons = [];
    //generates array of objects with the keys label and value (used for quick buttons)
    for (i = 0; i < jsonData.length; i++) {
        buttons[i] = {
            label: jsonData[i].title,
            value: jsonData[i].payload,
        };
    }
    //method to add quick buttons (provided by react-chat-widget)
    setQuickButtons(buttons);
}

// handle bot response: Images
export function handleImages(jsonData) {
    renderCustomComponent(CustomImage, {src: jsonData})
}