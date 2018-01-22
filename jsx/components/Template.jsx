import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import StartPage from './StartPage.jsx';
import Category from './Category.jsx';
import Questions from './Questions.jsx';
import Summary from './Summary.jsx';
import db from './firebase.js';
import * as Firebase from 'firebase';

class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: '',
      display: false,
      allQuestions: [],
      number: 1,
      questionArray: [],
      question: '',
      summary: false
    }
  }

  getCategory = (event) => {
    this.setState({
      category: event.target.dataset.category
    })
  }

  getData = () => {
    db.on('value', snap => {
      this.setState({
        allQuestions: snap.val().category[this.state.category]
      });
      let questionNumber = document.querySelector('h2');
      questionNumber.innerHTML = 'Pytanie ' + this.state.number;
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
       let question = document.querySelector('.text');
       question.innerHTML = randomQuestion;
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
    })
  }

  colorChange = (event) => {
    let answers = document.querySelectorAll('.answer');
    for(let i = 0; i < answers.length; i++) {
      answers[i].style.backgroundColor = '#545E6E';
    }
    event.target.style.backgroundColor = '#8D8276';
    if (this.state.questionArray.length < 5) {
      this.setState({
        display: true,
        number: this.state.number + 1
      });    
    } else {
      this.setState({
        summary: true
      });
    }
  }

  nextQuestion = () => {
    if (this.state.questionArray.length < 5) {
      this.setState({
        display: false
      });
      let answers = document.querySelectorAll('.answer');
      for(let i = 0; i < answers.length; i++) {
        answers[i].style.backgroundColor = '#545E6E';
      }
      this.getData();
    }

  }

  render(){
    let childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { getCategory: this.getCategory, category: this.state.category, colorChange: this.colorChange, getData: this.getData }));
    return (
      <div id='app'>
        <Header />
        <div>{childrenWithProps}</div>
        <Footer display={this.state.display} summary={this.state.summary}next={this.nextQuestion}/>
      </div>
    )
  }
}

export default Template;
