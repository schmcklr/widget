import {Badge, Button, Form} from "react-bootstrap";

import "./contact.scss";


const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-left p-5"><br/>Contact</h1>
                <hr/>
                <p>Interesse geweckt? Gerne stellen wir unser Chat Widget „Liefy Lieferbox“ auch deiner Online
                    Food-Branche zur Verfügung und passen es bei Bedarf individuell für dich an!
                    Kontaktiere uns unter Liefy@gmx.com
                    Wir freuen uns schon darauf, auch deine Food-Website mit unserem automatisierten Beratungsservice
                    weiter zu digitalisieren!
                </p>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
                <Button className="submitButton" variant="outline-danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;