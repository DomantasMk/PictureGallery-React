import React from 'react';

const SearchCountBox = ({countChange}) => {
    return(
        <div className='pa3 ph0 ph3-l ph3-ns pa1-m w-50 w-100-m center fr-ns fr-l fn-m' >
            <input
            className='pa3 w-100 w-50-l w-25-ns w-50-m fl-ns fl-l fn-m ba b--green bg-lightest-blue center-m' 
            type='search' 
            placeholder='Enter picture count'
            onChange={countChange}
            />
        </div>

    );
}
export default SearchCountBox;