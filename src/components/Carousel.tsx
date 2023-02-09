import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import "./Ca.css";

const StyledButton = styled.button`
  padding: 6px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  line-height: 1.5;
  background: white;
  border: 1px solid white;
  position: relative;
  font-weight: bold;
  top: 80px;
`;

function Carousel() {
  const settings = {
    className: "center",
    centerPadding: "10px",
    centerMode: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: true,
    pauseOnHover: false,
  };
  return (
    <div className="car-container">
      <h1>
        <strong>Best Webtoon</strong>{" "}
      </h1>
      <br />
      <link
        rel="stylesheet"
        type="text/css"
        // charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <style>{cssstyle}</style>
      <Slider {...settings}>
        <div className="slide-a">
          <img src={require("./images/toon1.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-b">
          <img src={require("./images/toon2.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-c">
          <img src={require("./images/toon3.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-d">
          <img src={require("./images/toon4.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-e">
          <img src={require("./images/toon5.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-f">
          <img src={require("./images/toon6.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-g">
          <img src={require("./images/toon7.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-a">
          <img src={require("./images/toon8.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-b">
          <img src={require("./images/toon9.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-c">
          <img src={require("./images/toon10.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
        <div className="slide-d">
          <img src={require("./images/toon11.jpg")} alt="profile" />
          <StyledButton>바로 가기</StyledButton>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

const cssstyle = `
.center img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  margin: auto;
  max-width: 100%;
  top : 30px
}

.center .slick-center div {
    opacity: 1;
    -ms-transform: scale(1.04);
    transform: scale(1.04);
}
.center div {
    transition: all .3s ease;
}
`;
