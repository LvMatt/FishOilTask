import React, {Component} from 'react';
import style from "./MainSection.module.scss";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import eye from '../assets/icons/eye.png';

class ResponsiveBoxes extends Component{
    cards = [
        {
            "image": '/assets/icons/eye.png',
            "headline" : "Eyes",
            "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            "image": '/assets/icons/heart.svg',
            "headline" : "Heart",
            "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            "image": '/assets/icons/brain.svg',
            "headline" : "Brain Capacity",
            "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            "image": '/assets/icons/quality.svg',
            "headline" : "High Quality",
            "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            "image": '/assets/icons/sustainable.svg',
            "headline" : "Sustainable",
            "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        }
    ]
    render(){
        return (
            <Container >
                <Row className={style.card_wrapper}>
                    {
                        this.cards.map((card) => (
                       
                    <Col lg={2} md={3} sm={6} xs={10} className={style.card}>
                        <div className={style.card_image_wrapper}>
                            <img className={style.card_image} src={card.image}></img>
                        </div>
                        <div className={style.card_header}>
                            <h2>
                                {card.headline}
                            </h2>
                        </div>
                        <div className={style.card_text}>
                            <p>
                                {card.text}
                            </p>
                        </div>
                    </Col>
                    ))}
                </Row>
                
            </Container>
        )
    }
}

export default ResponsiveBoxes;