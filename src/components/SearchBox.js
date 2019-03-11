import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa3 ph0 ph3-l ph3-ns pa1-m w-50 w-100-m center fl-ns fl-l fn-m'>
            <input
            className='pa3 w-100 w-50-l w-25-ns w-50-m fr-ns fr-l fn-m ba b--black bg-washed-red center-m' 
            type='search' 
            placeholder='Enter authors name'
            onChange={searchChange}
            />
        </div>

    );
}
export default SearchBox;