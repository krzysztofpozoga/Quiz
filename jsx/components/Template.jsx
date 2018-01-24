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
      summary: false,
      summaryAnswers: [],
      summaryClassNames: [],
      summaryQuestions: []
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
         let randomQuestion = this.state.allQuestions[randomNumberQuestion].question;
         let goodAnswer = this.state.allQuestions[randomNumberQuestion].goodAnswer;
         let badAnswers = this.state.allQuestions[randomNumberQuestion].badAnswers;
         let goodAnswerNumber = Math.round((Math.random() * 3));
         let answers = document.querySelectorAll('.answer');
         let question = document.querySelector('.text');
         question.innerHTML = randomQuestion;
         this.state.summaryQuestions.push(randomQuestion);
         for( let i = 0; i<answers.length; i++) {
           for( let j = 0; j<badAnswers.length; j++) {
             if (i === goodAnswerNumber) {
               answers[i].innerHTML = goodAnswer;
               answers[i].classList.add('right');
             } else if (i === j && i !== goodAnswerNumber) {
               answers[i].innerHTML = badAnswers[j];
               answers[i].classList.add('wrong');
             } else if (i > j) {
               answers[i].innerHTML = badAnswers[goodAnswerNumber];
               answers[i].classList.add('wrong');
             }
           }
         }
       } else {
         this.getData();
       }

    })
  }

  colorChange = (event) => {
    let answers = document.querySelectorAll('.answer');
    for(let i = 0; i < answers.length; i++) {
      answers[i].style.backgroundColor = '#545E6E';
    }
    event.target.style.backgroundColor = '#8D8276';
    this.state.summaryClassNames[this.state.number - 1] = event.target.className
    this.state.summaryAnswers[this.state.number - 1] = event.target.innerHTML;
    if (this.state.questionArray.length < 2) {
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
    let answers = document.querySelectorAll('.answer');
    if (this.state.questionArray.length < 2) {
      this.setState({
        display: false
      });
      for(let i = 0; i < answers.length; i++) {
        answers[i].classList.remove('right', 'wrong');
        answers[i].style.backgroundColor = '#545E6E';
      }
      this.getData();
    }

  }

  render(){
    let childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { getCategory: this.getCategory, category: this.state.category, colorChange: this.colorChange, getData: this.getData, summary: this.state.summaryQuestions, answers: this.state.summaryAnswers, class: this.state.summaryClassNames }));
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
