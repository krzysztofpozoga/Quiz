import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <footer>
        {this.props.display ? <div className='next' onClick={this.props.next} >Następne pytanie!</div> : null}
        {this.props.summary ? <IndexLink to='/summary'><div className='playAgain'>KONIEC!</div></IndexLink> : null}      
      </footer>
    )
  }
}

export default Footer;
