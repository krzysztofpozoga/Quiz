import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import StartPage from './StartPage.jsx';

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id='app'>
        <Header />
        <StartPage />
        <Footer />
      </div>
    )
  }
}

export default Main;
