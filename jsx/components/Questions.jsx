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
      let randomNumberQuestion = Math.round(Math.random() * (this.state.allQuestions.length-1));
      let idQuestion = this.state.allQuestions[randomNumberQuestion].id;
       if (this.state.questionArray.indexOf(idQuestion) === -1) {
         this.state.questionArray.push(idQuestion);
       }
       let randomQuestion = this.state.allQuestions[randomNumberQuestion].question;
       let goodAnswer = this.state.allQuestions[randomNumberQuestion].goodAnswer;
       let badAnswers = this.state.allQuestions[randomNumberQuestion].badAnswers;
       let goodAnswerNumber = Math.round((Math.random() * 3));
       let answers = document.querySelectorAll('.answer');
       for( let i = 0; i<answers.length; i++) {
         for( let j = 0; j<badAnswers.length; j++) {
           if (i === goodAnswerNumber) {
             answers[i].innerHTML = goodAnswer;

           } else if (i === j && i !== goodAnswerNumber) {
             answers[i].innerHTML = badAnswers[j];

           } else if (i > j) {
             answers[i].innerHTML = badAnswers[goodAnswerNumber];
             
           }
         }
       }
       this.setState({
         question: randomQuestion
       })
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
                <div className='text'>{this.state.question}</div>
              </div>
            </div>
            <div className='row'>
              <div className='answer'></div>
              <div className='answer'></div>
            </div>
            <div className='row'>
              <div className='answer'></div>
              <div className='answer'></div>
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
