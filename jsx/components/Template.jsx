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
      category: '',
      display: false
    }
  }

  getCategory = (event) => {
    this.setState({
      category: event.target.dataset.category
    })
  }

  colorChange = (event) => {
    this.setState({
      display: true
    })
    if (event.target.style.backgroundColor === '' || event.target.style.backgroundColor === 'rgb(84, 94, 110)') {
      event.target.style.backgroundColor = 'rgb(141, 130, 118)';
    } else {
      event.target.style.backgroundColor = 'rgb(84, 94, 110)';
    }
  }

  render(){
    let childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { getCategory: this.getCategory, category: this.state.category, colorChange: this.colorChange }));
    return (
      <div id='app'>
        <Header />
        <div>{childrenWithProps}</div>
        <Footer display={this.state.display}/>
      </div>
    )
  }
}

export default Template;
