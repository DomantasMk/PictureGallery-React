import React from 'react';

const Card = (props) => {
    const {name, email, id} = props.obj;
    return(
        <div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt='photo2' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;