import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>
        {this.props.teacher ? <div className='icon teacher darkred' onClick={this.props.teacherAnswer}></div> : null}
        {this.props.phone ? <div className='icon phone green' onClick={this.props.phoneAnswer}></div> : null}
        {this.props.half ? <div className='icon half red' onClick={this.props.halfAnswer}></div> : null}
      </header>
    )
  }
}

export default Header;
