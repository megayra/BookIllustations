import React, {Component} from "react";
import { Carousel } from 'react-bootstrap';
import bookImg from '../assets/img/cosmos.jpg';
import bookImg1 from '../assets/img/invitation.jpg';
import bookImg2 from '../assets/img/voyage.jpg';

class Home extends Component {

    render() {
        return <div className="carousel-wrapper"><Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bookImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Different Illustrations</h3>
            <p>Add your book illustrations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bookImg1}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Book Illustrations</h3>
            <p>Add your illustrations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bookImg2}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Diverse Illustrations for our books</h3>
            <p>Add your illustrations.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    }
}

export default Home;
