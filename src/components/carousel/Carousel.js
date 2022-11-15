import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.css";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="embla__slide__inner">
            <img className="images__embla" 
              src="https://cdn.pixabay.com/photo/2017/07/22/20/40/girl-2529907_960_720.jpg"
              alt="slide 1"
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className="embla__slide__inner">
            <img className="images__embla"
              src="https://cdn.pixabay.com/photo/2016/01/13/22/46/boy-1139042_960_720.jpg"
              alt="slide 2"
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className="embla__slide__inner">
            <img className="images__embla"
              src="https://cdn.pixabay.com/photo/2016/08/13/13/45/boy-1590771_960_720.jpg"
              alt="slide 3"
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className="embla__slide__inner">
            <img className="images__embla"
              src="https://cdn.pixabay.com/photo/2016/03/27/07/19/black-and-white-1282260_960_720.jpg"
              alt="slide 4"
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className="embla__slide__inner">
            <img className="images__embla"
              src="https://cdn.pixabay.com/photo/2017/08/27/18/26/old-man-2687112_960_720.jpg"
              alt="slide 5"
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className="embla__slide__inner">
            <img className="images__embla"
              src=" https://c0.wallpaperflare.com/preview/83/747/740/grayscale-photography-of-child.jpg"
              alt="slide 6"
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className="embla__slide__inner">
            <img className="images__embla"
              src="https://c1.wallpaperflare.com/preview/99/189/179/boy-child-male-hand.jpg"
              alt="slide 7"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
