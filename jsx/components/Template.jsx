import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import StartPage from './StartPage.jsx';
import Category from './Category.jsx';
import Questions from './Questions.jsx';
import Summary from './Summary.jsx';

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
      summaryQuestions: [],
      again: false,
      teacher: false,
      phone: false,
      half: false
    }
  }

  getCategory = (event) => {
    this.setState({
      category: event.target.dataset.category,
      teacher: true,
      phone: true,
      half: true
    })
  }

  getData = () => {
    let link = `https://hisquiz.firebaseio.com/category/${this.state.category}.json`
    fetch(link)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allQuestions: data
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

  teacherAnswer = (event) => {
    let answers = document.querySelectorAll('.wrong');
    let randomWrong = Math.round((Math.random() * 2));
    for(let i = 0; i < answers.length; i++) {
      if (answers[i].className === 'answer wrong') {
        answers[randomWrong].style.backgroundColor = 'darkred';
      }
    }
    event.target.style.visibility = 'hidden';
  }

  phoneAnswer = (event) => {
    let answers = document.querySelectorAll('.answer');
    for(let i = 0; i < answers.length; i++) {
      if (answers[i].className === 'answer right') {
        answers[i].style.backgroundColor = 'green';

      }
    }
    event.target.style.visibility = 'hidden';
  }

  halfAnswer = (event) => {
    this.randomNumber = () => {
      return Math.round((Math.random() * 2));
    }
    let answers = document.querySelectorAll('.wrong');
    let firstRandomWrong = this.randomNumber();
    let secondRandomWrong = Math.round((Math.random() * 2));
    console.log(firstRandomWrong, secondRandomWrong);
    if (firstRandomWrong === secondRandomWrong) {

      secondRandomWrong = this.randomNumber();
      console.log("Nowe: " + firstRandomWrong, secondRandomWrong);
    } else {
      secondRandomWrong = secondRandomWrong;
      console.log("Początkowe: " + firstRandomWrong, secondRandomWrong);
    }
    for(let i = 0; i < answers.length; i++) {
      if (answers[i].className === 'answer wrong') {
        answers[firstRandomWrong].style.backgroundColor = 'red';
        answers[secondRandomWrong].style.backgroundColor = 'red';
      }
    }
    event.target.style.visibility = 'hidden';
  }

  colorChange = (event) => {
    let answers = document.querySelectorAll('.answer');
    for(let i = 0; i < answers.length; i++) {
      answers[i].style.backgroundColor = '#545E6E';
    }
    event.target.style.backgroundColor = '#8D8276';
    this.state.summaryClassNames[this.state.number - 1] = event.target.className
    this.state.summaryAnswers[this.state.number - 1] = event.target.innerHTML;
    if (this.state.questionArray.length < 20) {
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
    let progressBar = document.querySelector('.progress');
    let progress = (100/20)*this.state.number;

      if (this.state.number <= 5) {
        progressBar.style.height =`${progress}%`;
      } else if (this.state.number <= 10) {
        progressBar.style.backgroundColor = 'orange';
        progressBar.style.height =`${progress}%`;
      } else if (this.state.number <= 15) {
        progressBar.style.backgroundColor = 'yellow';
        progressBar.style.height =`${progress}%`;
      } else {
        progressBar.style.backgroundColor = 'green';
        progressBar.style.height =`${progress}%`;
      }

    if (this.state.questionArray.length < 20) {
      this.setState({
        display: false
      });
      for(let i = 0; i < answers.length; i++) {
        answers[i].classList.remove('right', 'wrong');
        answers[i].style.backgroundColor = '#545E6E';
      }
      this.getData();
    }
    if (this.state.summary === true) {
      this.setState({
        summary: false,
        again: true
      });
    }
  }

  playAgain = () => {
    this.setState({
      category: '',
      display: false,
      allQuestions: [],
      number: 1,
      questionArray: [],
      summary: false,
      summaryAnswers: [],
      summaryClassNames: [],
      summaryQuestions: [],
      again: false,
      teacher: false,
      phone: false,
      half: false
    });
  }

  render(){
    let childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { getCategory: this.getCategory, category: this.state.category, colorChange: this.colorChange, getData: this.getData, summary: this.state.summaryQuestions, answers: this.state.summaryAnswers, class: this.state.summaryClassNames }));
    return (
      <div id='app'>
        <Header teacher={this.state.teacher} phone={this.state.phone} half={this.state.half} teacherAnswer={this.teacherAnswer} phoneAnswer={this.phoneAnswer} halfAnswer={this.halfAnswer}/>
        <div>{childrenWithProps}</div>
        <Footer display={this.state.display} summary={this.state.summary} again={this.state.again} next={this.nextQuestion} playAgain={this.playAgain}/>
      </div>
    )
  }
}

export default Template;
