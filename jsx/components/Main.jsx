import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

import Template from './Template.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import StartPage from './StartPage.jsx';
import Category from './Category.jsx';
import Questions from './Questions.jsx';
import Summary from './Summary.jsx'

class Main extends React.Component {
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={StartPage} />
          <Route path="/category" component={Category} />
          <Route path="/questions" component={Questions} />
          <Route path="/summary" component={Summary} />
        </Route>
      </Router>
    )
  }
}

export default Main;
