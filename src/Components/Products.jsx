import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import test from './Assets/BioShock_cover.jpg'
import { Button, Container } from 'react-bootstrap';
import gamesData from '../API/gamesData.json';

const Products = () => {

    return (
        <Row xs={1} md={2}>
            {gamesData.map((game, idx) => (
                <Col key={idx}>
                    <Card className='product-card'>
                        <Card.Img  style={{ 
                                height: "100%",
                                width: "200px",  
                                objectFit: "cover", 
                                borderRight: "5px solid rgba(0, 0, 0, 0.2)", 
                                borderBottom: "5px solid rgba(0, 0, 0, 0.2)", 
                                marginTop:"50px"
                            }}  variant="top" src={game.img} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "50px", margin: "25px", borderBottom: "2px solid black" }}>{game.title}</Card.Title>
                            <Card.Text style={{ fontSize: "20px", margin: "25px" }}>
                                {game.description}
                            </Card.Text>
                            <Card.Text style={{ fontSize: "10px", textAlign: "end", margin: "25px",}}>
                                $ {game.price}
                            </Card.Text>
                            <Card.Text style={{ fontSize: "15px", textAlign: "end", margin: "25px" }}>
                                User Rating: {game.rating}⭐
                            </Card.Text>

                        </Card.Body>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe style={{padding:"15px"}} width="560" height="315" src={game.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <Button className='buy-btn' onClick={() => (window.location.href = "https://store.steampowered.com/")}>Get Now!</Button>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Products