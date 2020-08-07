import React, { useEffect, useState } from 'react';
import classes from './Slides.module.css';

const Slides = (props) => {
    const [index, setIndex] = useState(0);

    const changeIndexHandler = () => {
        const len = props.albums.length - 1;
        const currentIndex = index;
        setIndex(currentIndex < len ? currentIndex + 1 : 0)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeIndexHandler()
        }, 5000);
        return () => clearInterval(interval)
    });

    return (
        <div className={classes.Slide} >
            <img
                onClick={props.clicked}
                className={classes.Image}
                src={props.albums[index].images[0].url}
                alt="" />
        </div>
    )
}

export default Slides;