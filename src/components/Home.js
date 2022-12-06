import React from 'react'
import { Carousel } from 'react-bootstrap';
import baju from '../assets/images/trending/baju.jpg';
import kainmotif from '../assets/images/trending/kainmotif.jpg';
import kainnew from '../assets/images/trending/kainnew.jpg';

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={baju}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Trending 1</h3>
            <p>Baju batik jumputan gambo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kainmotif}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Trending 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kainnew}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Trending 3</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export default Home
