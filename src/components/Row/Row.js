import React from 'react'
import classes from './Row.module.css'
import RowCards from './RowCards/RowCards'
const Row = (props) => {
    const rowcards = props.data.map(item => {
        return <RowCards
            key={item.id}
            url={item.images[0].url}
            name={item.name}
            artists={item.artists}
            description={item.description} />
    })
    return (
        <div className={classes.Body}>
            <div className={classes.Header}>
                <h1>{props.name}</h1>
                <h4>SEE ALL</h4>
            </div>
            <div className={classes.Container}>
                {rowcards}
            </div>
        </div>
    )
}

export default Row;