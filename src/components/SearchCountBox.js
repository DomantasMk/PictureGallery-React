import React from 'react';

const SearchCountBox = ({countChange}) => {
    return(
        <div className='pa3 w-50' style={{float:'left'}}>
            <input
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='Enter picture count'
            onChange={countChange}
            style={{float:'right'}}
            />
        </div>

    );
}
export default SearchCountBox;