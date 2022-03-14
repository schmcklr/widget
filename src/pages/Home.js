import {Widget} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center p-5 display-1">Liefy der Chatbot</h1>
                <hr />
                <br />
                <h2 className="">Wie funktioniert Liefy?</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam blanditiis cum debitis facilis ipsum magnam praesentium qui quo ratione soluta tempora ullam, unde vero voluptatibus. Alias enim placeat quisquam.</p>

            </div>
            <Widget />
        </div>
    );
};
export default Home;
