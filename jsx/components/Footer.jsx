import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <footer>
        {this.props.display ? <div className='next'>Następne pytanie!</div> : null}
        <div className='playAgain'></div>
      </footer>
    )
  }
}

export default Footer;
