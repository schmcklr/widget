import {Badge, Button, Form} from "react-bootstrap";

import "./Contact.scss";

const Contact = () => {
    return (
        <div className="container">
        <div className="row">
            <h1 className="text-left p-5"><br/>Contact Page</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam blanditiis cum debitis facilis ipsum magnam praesentium qui quo ratione soluta tempora ullam, unde vero voluptatibus. Alias enim placeat quisquam.</p>

        </div>

            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
                <Button className="submitButton" variant="outline-danger" type="submit">
    Submit
  </Button>
</Form>

    </div>
    );
};

export default Contact;