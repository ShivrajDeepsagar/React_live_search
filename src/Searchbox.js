import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
  return(
    <div className= 'tc pa2'>
      <input
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='seach..'
      onChange={searchChange}       //onChange. The actual dom listener
      />
    </div>
  );
}

export default Searchbox;
