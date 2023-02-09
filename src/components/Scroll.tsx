import React from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import Card from "react-bootstrap/Card";

const Scroll = () => {
  const animatedItem: any = {
    0: useScrollFadeIn("left", 1, 0),
    1: useScrollFadeIn("left", 1, 0.2),
    2: useScrollFadeIn("left", 1, 0.3),
    3: useScrollFadeIn("right", 1, 0),
    4: useScrollFadeIn("right", 1, 0.2),
    5: useScrollFadeIn("right", 1, 0.3),
  };
  return (
    <div className="scroll-container">
      <div>
        <h1>
          <strong>드라마로 제작된 작품</strong>
        </h1>
      </div>
      <div className="scroll-drama">
        <div {...animatedItem[0]}>
          <Card style={{ width: "17rem", height: "27rem", margin: "30px" }}>
            <Card.Img variant="top" src={require("./images/drama1.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div {...animatedItem[1]}>
          <Card style={{ width: "17rem", height: "27rem", margin: "30px" }}>
            <Card.Img variant="top" src={require("./images/drama2.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div {...animatedItem[2]}>
          <Card style={{ width: "17rem", height: "27rem", margin: "30px" }}>
            <Card.Img variant="top" src={require("./images/drama3.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div>
        <h1>
          <strong>애니메이션으로 제작된 작품</strong>
        </h1>
      </div>
      <div className="scroll-drama">
        <div {...animatedItem[3]}>
          <Card style={{ width: "17rem", height: "29rem", margin: "30px" }}>
            <Card.Img variant="top" src={require("./images/ani1.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div {...animatedItem[4]}>
          <Card style={{ width: "17rem", height: "29rem", margin: "30px" }}>
            <Card.Img variant="top" src={require("./images/ani2.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div {...animatedItem[5]}>
          <Card style={{ width: "17rem", height: "29rem", margin: "30px" }}>
            <Card.Img variant="top" src={require("./images/ani3.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
