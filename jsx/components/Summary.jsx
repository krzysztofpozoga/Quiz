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
          {questions}
        </section>
    )
  }
}

export default Summary;
