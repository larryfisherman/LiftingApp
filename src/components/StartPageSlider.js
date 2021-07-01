import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function StartPageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Image>
        <a>
          <img src="./images/bmi-slide.jpg" alt="" />
        </a>
      </Image>
      <Image>
        <a>
          <img src="./images/workouts-slide.jpg" alt="" />
        </a>
      </Image>
      <Image>
        <a>
          <img src="./images/dishes-slide.jpg" alt="" />
        </a>
      </Image>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
  }

  ul li button {
    &:before {
      font-size: 15px;
      color: #f9f9f9;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
`;

const Image = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  padding: 20px 10px;

  a {
    border: 2px solid rgb(255, 255, 255, 0.5);
    border-radius: 4px;
    display: block;
    position: relative;
  }

  img {
    width: 100%;
  }
`;

export default StartPageSlider;
