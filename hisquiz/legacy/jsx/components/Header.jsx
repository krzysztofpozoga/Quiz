import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>
        {this.props.teacher ? <div className='icon teacher darkred' onClick={this.props.teacherAnswer}><div className='arrow'></div>
        <div className="tooltip">Pani Ania odrzuca jedną nieprawidłową odpowiedź!</div></div> : null}
        {this.props.phone ? <div className='icon phone green' onClick={this.props.phoneAnswer}><div className='arrow'></div>
        <div className="tooltip">Telefon do przyjaciela. On zawsze prawdę Ci powie!</div></div> : null}
        {this.props.half ? <div className='icon half red' onClick={this.props.halfAnswer}><div className='arrow'></div>
        <div className="tooltip">Odrzuca dwie błędne odpowiedzi!</div></div> : null}
      </header>
    )
  }
}

export default Header;
