import React from "react";
import Card from "react-bootstrap/Card";

function Attractions(props) {
  const viewDetails = () => {
    console.log(props, "props");
    window.location.href = "/AttractionDetails";
  };

  return (
      <Card className="bg-dark text-white shadow" onClick={viewDetails}>
        <Card.Img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBRQYxAgNtfD9n9TZPr6i9Hc7OjuYCkX4xWg&usqp=CAU"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Attractions</Card.Title>
        </Card.ImgOverlay>
      </Card>
  );
}

export default Attractions;
