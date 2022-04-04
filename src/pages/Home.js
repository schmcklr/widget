import {useEffect} from "react";
import {Widget, addResponseMessage, setQuickButtons,addUserMessage, handleQuickButtonClicked} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./Home.css";
//socket io connection which was used before -> switched to Rest Api
//Import socket client and Connect to RASA server
/*
import {io} from "socket.io-client";
const socket = io("http://localhost:5005/webhooks/rest/webhook", {
        pathname: '/socket.io',
        transports: ['websocket'],
    });
*/
const Home = () => {

    //******************************************************************
    //Rest Api connection in use
    //******************************************************************


    // handle user Message typed in via keyboard
    const handleNewUserMessage = (newMessage) => {

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
    .then(json => addResponseMessage(json[0].text))
    // Used for texting: display text in console
    //.then(json => console.log(json[0].getAttribute("data-payload")))


    };



let buttons = [
  {
    label: 'Vegan',
    value: 'Vegan',
  },


  {
    label: 'Vegetarisch',
    value: 'Vegetarisch',
  },
    {
    label: 'Vegan',
    value: 'Vegan',
  },
    {
    label: 'Vegan',
    value: 'Vegan',
  },
    {
    label: 'Vegan',
    value: 'Vegan',
  },
    {
    label: 'Vegan',
    value: 'Vegan',
  },
    {
    label: 'Vegan',
    value: 'Vegan',
  }


];



setQuickButtons(buttons);


const handleQuickButtonClicked = (value) => {

addUserMessage(value)
    console.log(value);
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
