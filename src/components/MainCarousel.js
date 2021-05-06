import React from "react";
import { Carousel } from "react-bootstrap";

function MainCarousel({ data }) {
  const slicedData = data.slice(0, 5);

  return (
    <div class="mt-40 mx-auto max-w-6xl  w-3/4 h-auto min-h-72 max-h-auto">
      <Carousel>
        {slicedData.map((newsDetail, index) => {
          return (
            <Carousel.Item>
              <img
                class="max-w-full mx-auto"
                src={newsDetail.urlToImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 class="font-bold">{newsDetail.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default MainCarousel;
