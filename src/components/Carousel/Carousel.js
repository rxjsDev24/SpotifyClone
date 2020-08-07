import React from 'react';
import classes from './Carousel.module.css';
import Slides from './Slides/Slides';

const Carousel = (props) => {
    return (
        <div className={classes.Carousel}>
            <Slides albums={props.data} />
        </div>
    )
}

export default Carousel;