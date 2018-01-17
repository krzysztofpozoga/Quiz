import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import StartPage from './StartPage.jsx';
import Category from './Category.jsx';
import Questions from './Questions.jsx';

class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: ''
    }
  }

  getCategory = (event) => {
    this.setState({
      category: event.target.dataset.category
    })
  }

  render(){
    let childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { getCategory: this.getCategory, category: this.state.category }));
    return (
      <div id='app'>
        <Header />
        <div>{childrenWithProps}</div>
        <Footer />
      </div>
    )
  }
}

export default Template;
