import React from 'react';


class Questions extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getData();
  }

  componentWillUnmount(){
    this.props.getData();
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
