import React from 'react';
import classes from './Carousel.module.css';
import { useSelector } from 'react-redux'
import Slides from './Slides/Slides';
import Dots from './Dots/Dots';

const Carousel = (props) => {
    const state = useSelector(state => state);
    return (
        <div className={classes.Carousel}>
            <Slides url={props.data} clicked={props.clicked} />
            <Dots />
        </div>
    )
}

export default Carousel;