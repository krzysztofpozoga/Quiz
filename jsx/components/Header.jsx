import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>
          <div className='icon teacher'>
          </div>
          <div className='icon phone'>
          </div>
          <div className='icon half'>
          </div>
      </header>
    )
  }
}

export default Header;
