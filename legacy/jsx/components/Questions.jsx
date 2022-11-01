import React from 'react';
import Spinner from './Spinner.jsx'


class Questions extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getData();
  }

  render(){
    return (
        <section id='question'>
        <div className='questionPicture'></div>
          <div className='left'>
            <div className="progressBar">
                  <span className='progress'></span>
            </div>
          </div>
          {this.props.spinner ? <Spinner /> : <div className='middle'>
            <h2>Pytanie</h2>
            <div className='row'>
              <div className='quizQuestion'>
                <div className='text'></div>
              </div>
            </div>
            <div className='row' >
              <div className='answer' onClick={this.props.colorChange}></div>
              <div className='answer' onClick={this.props.colorChange}></div>
            </div>
            <div className='row'>
              <div className='answer' onClick={this.props.colorChange}></div>
              <div className='answer' onClick={this.props.colorChange}></div>
            </div>
          </div>}
          
        </section>
    )
  }
}

export default Questions;
