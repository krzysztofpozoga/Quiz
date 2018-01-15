import React from 'react';

class StartPage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <section id='start'>
          <div className='left'>
            <div className="flip-container">
               <div className="flipper">
                   <div className='question'>Hmmm...Pierwszym królem Polski był...?</div>
                   <div className='question_back'>Bolesław I Chrobry</div>
                </div>
            </div>
            <div className='arrow'></div>
            <div className='questionMark'><img src='images/questionmark.jpg' /></div>
          </div>
          <div className='middle'>
            <h1 className='title'>QUIZ HISTORYCZNY &bdquo;HISQUIZ&rdquo;</h1>
            <div className='button'>Graj</div>
          </div>
          <div className='right'>
            <div className='archeologist'><img src='images/archeologist.png' /></div>
          </div>
        </section>
    )
  }
}

export default StartPage;
