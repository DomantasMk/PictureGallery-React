import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa3 w-50' style={{float:'right'}}>
            <input
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='Enter authors name'
            onChange={searchChange}
            style={{float:'left'}}
            />
        </div>

    );
}
export default SearchBox;