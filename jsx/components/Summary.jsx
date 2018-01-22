import React from 'react';

class Summary extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let questions = this.props.summary.map( (elem, i) => {
      return (
        <div key={i}>{elem}</div>
      )
    });

    return (
        <section id='summary'>
          <div className='middle'>
            <h2>Twój wynik: <span className='score'></span>/20</h2>
            <div className='rightAnswers'>
              {questions}
            </div>
          </div>
        </section>
    )
  }
}

export default Summary;
