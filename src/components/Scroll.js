import React from 'react';

const Scroll = (props) =>{
    return (
        <div className='w-100' style={{overflowY: 'scroll', border: '1px solid black', height: '39em'}}>
            {props.children}
        </div>
    );
}

export default Scroll;