import React from 'react';
import Card from './Card.js';

const CardList = (props) =>{
    const {robots} = props; 
    const cardArray = robots.map( (user, i) => {
        return <Card
        key={robots[i].id}
        obj={robots[i]}
        />
    })
    return(
    <div>
        {cardArray}
    </div>
    );
}
export default CardList;