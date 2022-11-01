import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel
      className="carousel"
      controls={false}
      variant="light"
      interval="2000"
    >
      {/*-controls ise sağda ve solda çıkan okların gösterimi-  -Interval slide geçişlerinin süresi */}
      <Carousel.Item>
        <img
          height={652}
          width="100%"
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/03/27/22/06/sea-1284467_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={652}
          width="100%"
          className="d-block w-100"
          src="https://images.pexels.com/photos/5892261/pexels-photo-5892261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={652}
          width="100%"
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/12/04/19/56/sky-background-1077084_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={652}
          width="100%"
          className="d-block w-100"
          src="https://images.pexels.com/photos/5892261/pexels-photo-5892261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
