import React from 'react';

const Card = (props) => {
    const {author, author_url, id} = props.obj;
    return(
        <a target="_blank" rel="noopener noreferrer" className='tc bg-green dib br4 pa3 ma2 grow bw2 shadow-5' href={author_url}>
            <img alt='photo2' src={`https://picsum.photos/200/200/?image=${id}`} />
            <div style={{color:'black', textDecoration:'underline'}}>
                <h2>{author}</h2>
                <p>{author_url}</p>
            </div>
        </a>


    )
}

export default Card;