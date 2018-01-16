import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import StartPage from './StartPage.jsx';
import Category from './Category.jsx';
import Questions from './Questions.jsx';

class Template extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id='app'>
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Template;
