import React from "react";
import { Carousel } from "react-bootstrap";

function MainCarousel({ data }) {
  const slicedData = data.slice(0, 5);

  return (
    <div class="mt-40 max-w-6xl h-96 ">
      <Carousel>
        {slicedData.map((newsDetail, index) => {
          return (
            <Carousel.Item>
              <img
                class
                className="d-block w-100"
                src={newsDetail.urlToImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{newsDetail.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default MainCarousel;
