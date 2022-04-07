import {Component, useEffect} from "react";
import {Widget, addResponseMessage, setQuickButtons,addUserMessage, renderCustomComponent, handleQuickButtonClicked} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./Home.css";

//TODO: Restructure Code maybe in seperate files and not all function in the home.js (Norman)
//TODO: After the button clicked and send to BE no responses are coming -> fix


const Home = () => {

    //******************************************************************
    //Rest Api connection in use
    //******************************************************************

    // Used for submitting messages and getting responses
    function handleMessagesAndResponses (newMessage){

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
                botResponse(jsonData)
                //TODO: Remove development functions
                console.log(jsonData)
            });
    }

    // handle user Message typed in via keyboard
    const handleNewUserMessage = (newMessage) => {
        handleMessagesAndResponses (newMessage)
    };


    // function which checks message type of Bot Response
    function botResponse(jsonData) {

        let i;
        for (i=0; i < jsonData.length ; i++) {

            //buttons
            if (jsonData[i].hasOwnProperty('buttons')) {
                addResponseMessage(jsonData[i].text)
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
    function handleButtons (jsonData){

        let i;
        let buttons = [];

        for (i=0; i < jsonData.length ; i++) {

            console.log(jsonData[i].title)
            buttons[i] = {
                        label: jsonData[i].title,
                        value: jsonData[i].title,
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
        setQuickButtons([]);
    }

    // handle bot response Images
    function handleImages (jsonData) {
        console.log(jsonData)
        renderCustomComponent(Image, {src: jsonData})
    }

    //needed to render pictures
    class Image extends Component {
        render() {
            return <img  alt="placeholder" src={this.props.src} height="150" width="250" ></img>
        }
    }



    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center p-5 display-1">Liefy der Chatbot</h1>
                <hr/>
                <br/>
                <h2 className="">Wie funktioniert Liefy?</h2>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam blanditiis cum debitis
                        facilis ipsum magnam praesentium qui quo ratione soluta tempora ullam, unde vero voluptatibus. Alias
                        enim placeat quisquam.</p>

            </div>
            <Widget handleNewUserMessage={handleNewUserMessage}
                    handleQuickButtonClicked={handleQuickButtonClicked}
                    initPayload={"/get_started"}
                    customData={{"language": "de"}}
                    params={{'storage':'session'}}
                    title={"Liefy der Chatbot"}
                    subtitle={"How can I help you?"}
                    showTimeStamp={"yes"}
                    emojis={'YES'}
                    resizable={'YES'}



            />
        </div>
    );
};
export default Home;
