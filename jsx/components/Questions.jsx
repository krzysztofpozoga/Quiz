import React from 'react';

import db from './firebase.js';
import * as Firebase from 'firebase';

class Questions extends React.Component {
  constructor(props){
    super(props);
  }

  getData = () => {
    db.on('value', snap => {console.log(snap.val())})
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
