import React from 'react'
import classes from './RowCards.module.css'
const RowCards = (props) => {
    return (
        <div className={classes.CardContainer} onClick={props.clicked}>
            <div className={classes.Body}>
                <img
                    src={props.url}
                    alt={props.name}
                    className={classes.Card} />
                <div className={classes.Info}>
                    <h4>{props.name}</h4>
                    <span>{props.artists ? props.artists.map((artist) => artist.name).join(", ") : null}</span>
                </div>
            </div>
        </div>

    )
}

export default RowCards;