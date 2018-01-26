import React from 'react';

class Summary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      name: this.props.playersName
    }
  }

  countScore = () => {
     let goodAnswers = document.querySelectorAll('.right');
     this.setState({
       score: goodAnswers.length
     })
  }
  componentDidMount(){
    this.countScore();
  }

  render(){
    let questions = this.props.summary.map( (elem, i) => {
      return (
        <div key={i}>
          <div>{i+1}. {elem}</div>
          <div className={this.props.class[i]}>{this.props.answers[i]}</div>
        </div>

      )
    });
    return (
        <section id='summary'>
          <div className='middle'>
            <h3>Twój wynik: <span className='score'>{this.state.score}</span>/20</h3>
            <div className='rightAnswers'>
              {questions}
            </div>
          </div>
        </section>
    )
  }
}

export default Summary;
