import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <footer>
        <div className='next'></div>
        <div className='playAgain'></div>
      </footer>
    )
  }
}

export default Footer;
