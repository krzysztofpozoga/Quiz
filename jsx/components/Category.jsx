import React from 'react';
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";

import TypeName from './TypeName.jsx';

class Category extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <section id='category'>
          {this.props.name ? <TypeName type={this.props.type} getName={this.props.getName}/> : null}
          <div className='left'>
            <div className='info'>
              <p>Kilka informacji na początek:</p>
              <ul>
                <li>Test składa się z 20 losowo wybranych pytań.</li>
                <li>W ramach pomocy masz do wykorzystania trzy koła ratunkowe.</li>
                <li>Każde koło ratunkowe jest do wykorzystania tylko raz.</li>
                <li>Nie śpiesz się!</li>
                <li>Powodzenia i miłej zabawy ;)</li>
              </ul>
            </div>
          </div>
          <div className='middle'>
            <IndexLink to='/questions'>
              <div className='button'>
                <div className='categoryButton' data-category='mid' onClick={this.props.getCategory}>
                  Początki średniowiecza
                </div>
              </div>
            </IndexLink>
            <IndexLink to='/questions'>
              <div className='button'>
                <div className='categoryButton' data-category='zamoyski' onClick={this.props.getCategory}>
                  Zamoyski i Kopernik na tapecie
                </div>
              </div>
            </IndexLink>
          </div>
          <div className='right'>
            <div className='mieszkoSays'>Wybierz kategorię!</div>
            <div className='arrow'></div>
          </div>
        </section>
    )
  }
}

export default Category;
