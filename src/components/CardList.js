import React from 'react';
import Card from './Card.js';

const CardList = (props) =>{
    const {photos} = props; 
    let limit = props.limit;
    if(limit == 0){limit = 10}
/*     const cardArray = photos.map( (user, i) => {
        return <Card
        key={photos[i].id}
        obj={photos[i]}
        />
    }) */
    const cardArray = [];
    for(let i = 0; i<photos.length;i++){
        if(i+1 > limit){break;}
        cardArray.push(<Card key={photos[i].id} obj={photos[i]}/>);
    }
    return(
    <div>
        {cardArray}
    </div>
    );
}
export default CardList;