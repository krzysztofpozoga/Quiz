import React from 'react';

import db from './firebase.js';
import * as Firebase from 'firebase';

class Questions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allQuestions: [],
      number: 1,
      questionArray: [],
      question: ''
    }
  }

  getData = () => {
    db.on('value', snap => {
      this.setState({
        allQuestions: snap.val().category[this.props.category]
      });
    })
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return (
        <section id='question'>
          <div className='left'>
            <div className="progressBar">
                  <span></span>
            </div>
          </div>
          <div className='middle'>
            <h2>Pytanie {this.state.number}</h2>
            <div className='row'>
              <div className='quizQuestion'>
                <div className='text'>Ułóż w odpowiedniej kolejności epoki historyczne.</div>
              </div>
            </div>
            <div className='row'>
              <div className='answer'>Starożytność</div>
              <div className='answer'>Nowożytność</div>
            </div>
            <div className='row'>
              <div className='answer'>Średniowiecze</div>
              <div className='answer'>Współczensość</div>
            </div>
          </div>
          <div className='right'>
            <div className='teacherHint'>
              <div className='hint'></div>
              <div className='img'></div>
            </div>
            <div className='friendAnswer'>
              <div className='hint'></div>
              <div className='img'></div>
            </div>
          </div>
        </section>
    )
  }
}

export default Questions;
