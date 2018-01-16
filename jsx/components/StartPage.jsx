import React from 'react';

class StartPage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <section id='start'>
          <div className='start_question'>
            <div className='front_page_question'>
              <div className="flip-container">
                 <div className="flipper">
                     <div className='question'>Hmmm...Pierwszym królem Polski był...?</div>
                     <div className='question_back'>Bolesław I Chrobry</div>
                  </div>
              </div>
              <div className='arrow'></div>
              <div className='questionMark'></div>
            </div>
            <div className='archeologist'></div>
          </div>
          <div className='middle'>
            <h1 className='title'>QUIZ HISTORYCZNY &bdquo;HISQUIZ&rdquo;</h1>
            <div className='button'>GRAJ</div>
          </div>


        </section>
    )
  }
}

export default StartPage;
