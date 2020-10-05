import React from "react";
import Card from "react-bootstrap/Card";

function Food(props) {
  const viewDetails = () => {
    console.log(props, "props");
    window.location.href = "/FoodDetails";
  };

  return (
    <div>
      <Card className="bg-dark text-white" onClick={viewDetails}>
        <Card.Img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMCKN0VquhI4AF1kZxYrDOq7uceyQYgpDIfA&usqp=CAU"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>DineIn HotSpots</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Food;
