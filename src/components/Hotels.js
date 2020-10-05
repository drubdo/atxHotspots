import React from "react";
import Card from "react-bootstrap/Card";

function Hotels(props) {
  const viewDetails = () => {
    console.log(props, "props");
    window.location.href = "/hotelDetails";
  };

  return (
    <div>
      <Card className="bg-dark text-white" onClick={viewDetails}>
        <Card.Img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6nfxfNlZyq22JcpHyAeKTlxSc5yL0yldMCg&usqp=CAU"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Hotels</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Hotels;
