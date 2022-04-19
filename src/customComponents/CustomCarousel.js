import {Component} from "react";
import {Card, Carousel} from "react-bootstrap";


export default class CustomCarousel extends Component {
    render() {
        return (<Carousel id="myCarousel" variant="dark" indicators={false} slide={false}>
            <Carousel.Item interval={1000}>
                <Card style={{width: '15rem'}}>
                    <Card.Img variant="top"
                              src="https://image.geo.de/30131936/t/zp/v3/w1440/r0/-/vollkornbuerger-f-80996477-jpg--74900-.jpg"/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Card style={{width: '15rem'}}>
                    <Card.Img variant="top"
                              src="https://medien.bremen.de/media/464/288/italienisch-essen-bruschetta-quelle--beats-.jpg"/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

            </Carousel.Item>
            <Carousel.Item>
                <Card style={{width: '15rem'}}>
                    <Card.Img variant="top"
                              src="https://media.istockphoto.com/photos/arabic-and-middle-eastern-dinner-table-hummus-tabbouleh-salad-salad-picture-id1175505781?k=20&m=1175505781&s=612x612&w=0&h=STomby2lCtcvpl_hxK6RhknQQWrkvpkHcoDLD4zttFk="/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Carousel.Item>
        </Carousel>)

    }

}

