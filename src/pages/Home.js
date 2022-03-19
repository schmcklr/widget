import {useEffect} from "react";
import {Widget, addResponseMessage} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

//Import socket client and Connect to RASA server
import {io} from "socket.io-client";
const socket = io("http://localhost:5005");


const Home = () => {

    //Connecting with Server - positive response
    socket.on('connect', function () {
        console.log("Connected to Socket.io server");
    });

    // Write any connection errors to the console
    socket.on('connect_error', (error) => {
        console.error(error);
    });

    // send messages from client to server
    const handleNewUserMessage = (newMessage) => {
        console.log(newMessage);
        socket.emit("user_uttered", newMessage);
    };


    //bot responses
    const messages = document.getElementById('messages');


    function appendMessage(msg, type) {
        const item = document.createElement('div');
        item.textContent = msg;
        item.classList.add("message");
        item.classList.add(`message_${type}`);
        messages.appendChild(item);
    }

    socket.on('bot_uttered', function (response) {
    console.log("Bot uttered:", response);
    if (response.text) {
        appendMessage(response.text, "received");
    }
    });




/*    //messages from bot to frontend
    socket.on("bot_uttered", (message) => {
        addResponseMessage(message);
    });

    //new Message effect on icon
    useEffect(() => {
    addResponseMessage("Hey ich bin Liefy der Lieferbot. Kann ich dir weiterhelfen?");
    }, []);
*/


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
            <Widget handleNewUserMessage={handleNewUserMessage}/>
        </div>
    );
};
export default Home;
