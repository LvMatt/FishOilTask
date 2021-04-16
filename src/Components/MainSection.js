import React, { Component } from 'react';
import style from "./MainSection.module.scss";
import { Container, Row, Col } from 'react-bootstrap';
import background_pic from '../assets/background.png';
import coffee_pic from '../assets/coffee.svg';

class MainSection extends Component{
    render() {
        return(
                <div className={ style.main_header}>
                    <div className={style.image_wrapper}>
                        <img className={style.background_pic} src={background_pic}></img>
                        <img className={style.coffee_pic} src={coffee_pic} ></img>
                    </div>
                    <div className={style.text_header_section}>
                        <div className={style.headline_header}>
                            <h2>
                                FISH OIL
                            </h2>
                        </div>
                        <div className={style.sub_headline_header}>
                            <p>
                                Type: <span> Supplements </span>
                            </p>
                        </div>
                        <div className={style.product_header_categories}>
                            <button>

                                For non-fish eaters
                            </button>
                            <button>
                                For your brain, heart, eyes
                            </button>
                        </div>
                        <div className={style.product_information}>
                            <h4>Product information</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut. Vel pretium lectus quam id leo in vitae turpis.  
                            </p>
                        </div>
                        <div className={style.product_price}>
                            89 kr./md.
                        </div>
                        <div className={style.header_action}>
                            <button className={style.button_test}>
                                Do the health test
                            </button>
                            <button className={style.button_add}>
                                 Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                    )
    }
}

export default MainSection;

/* Fish_Oil 1 */

