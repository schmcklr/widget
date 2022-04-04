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
    //socket io connection which was used before -> switched to Rest Api
    //******************************************************************

    /*
    //Connecting with Server - positive response
    socket.on('connect', function () {
        console.log("Connected to Socket.io server");
    });

    // Write any connection errors to the console
    socket.on('connect_error', (error) => {
        console.error(error);
    });

    /*
    // send messages from client to server
    const handleNewUserMessage = (newMessage) => {
        console.log(newMessage);
        socket.emit("user_uttered", newMessage);
        socket.on("bot_uttered", (message) => {
        addResponseMessage(message);
    });
    };

    //bot responses
    const messages = document.getElementById('messages');

    function appendMessage(msg, type) {
        const item = document.createElement('div');
        item.textContent = msg;
        item.classList.add("message");
        item.classList.add(`message_${type}`);
        messages.appendChild(item);
    };

    socket.on('bot_uttered', function (response) {
    console.log("Bot uttered:", response);
    if (response.text) {
        appendMessage(response.text, "received");
    }
    });


   //messages from bot to frontend
    socket.on("bot_uttered", (message) => {
        addResponseMessage(message);
    });
/*
    //new Message effect on icon
    useEffect(() => {
    addResponseMessage("Hey ich bin Liefy der Lieferbot. Kann ich dir weiterhelfen?");
    }, []);
*/


    //******************************************************************
    //Rest Api connection in use
    //******************************************************************

    //********************GET*********************
    //GET request using fetch() currently not in use
    /*


    fetch("http://localhost:5005/webhooks/rest/webhook")

        // Converting received data to JSON
        .then(response => response.json())
        .then(json => {

        // Create a variable to store HTML
        let li = `<tr><th>Name</th><th>Email</th></tr>`;

        // Loop through each data and add a table row
        json.forEach(user => {
            li += `<tr>
                <td>${user.name} </td>
                <td>${user.email}</td>        
            </tr>`;
        });

    // Display result
    //document.getElementById("users").innerHTML = li;

        addResponseMessage(li);

});

*/





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
    .then(json => addResponseMessage(json[0].text))

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
