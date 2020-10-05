import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FoodDetails(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async function fetchData() {
            let res = await axios({
                "method": "GET",
                "url": "https://tripadvisor1.p.rapidapi.com/attractions/list",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                    "x-rapidapi-key": "49db63e008msha31d9ce23661601p1a123ajsnf699b90accc9",
                    "useQueryString": true
                }, "params": {
                    "lang": "en_US",
                    "currency": "USD",
                    "sort": "recommended",
                    "lunit": "km",
                    "location_id": localStorage.getItem("location_id") || 30196
                }
            })


            console.log('data', res.data.data)
            setData(res.data.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            Details
            <Container>
                <Row className="justify-content-md-center">
                    {data.map((item, index) => {
                        return (
                            <>
                                {

                                    item.name && <Col lg={6} key={index}>
                                        <Card style={{ minHeight: "200px", maxHeight: "200px", marginBottom: "10px", overflow: "hidden" }}>
                                            <Card.Img variant="top" />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                {item.photo && <img src={item.photo.images.original.url} style={{ width: "100px" }} />}
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                }
                            </>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default FoodDetails;
