import React from "react";
import "./Ca.css";
import styled from "styled-components";

const CateImg = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 10%;
  margin: 25px;
`;

const Categories = () => {
  return (
    <div className="cate-container">
      <h1>
        <strong>Categories</strong>
      </h1>
      <br></br>
      <br></br>
      <h2>
        <strong>다채로운 컨텐츠</strong>
      </h2>
      <div className="cate-img-container">
        <div className="cate-img-container">
          <CateImg src={require("./images/cate1.jpg")}></CateImg>
          <h1 className="image-text1">판타지</h1>
        </div>
        <div className="cate-img-container">
          <CateImg src={require("./images/cate2.jpg")}></CateImg>
          <h1 className="image-text2">액션</h1>
        </div>
        <div className="cate-img-container">
          <CateImg src={require("./images/cate3.jpg")}></CateImg>
          <h1 className="image-text3">로맨스</h1>
        </div>
        <div className="cate-img-container">
          <CateImg src={require("./images/cate4.jpg")}></CateImg>
          <h1 className="image-text4">무협</h1>
        </div>
      </div>
      <div className="cate-img-container">
        <div className="cate-img-container">
          <CateImg src={require("./images/cate5.jpg")}></CateImg>
          <h1 className="image-text1">스포츠</h1>
        </div>
        <div className="cate-img-container">
          <CateImg src={require("./images/cate6.jpg")}></CateImg>
          <h1 className="image-text2">감성</h1>
        </div>
        <div className="cate-img-container">
          <CateImg src={require("./images/cate7.jpg")}></CateImg>
          <h1 className="image-text3">스릴러</h1>
        </div>
        <div className="cate-img-container">
          <CateImg src={require("./images/cate8.jpg")}></CateImg>
          <h1 className="image-text4">개그</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
