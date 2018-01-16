import React from 'react';

class Category extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <section id='category'>
          <div className='left'>
            <div className='info'>
              <p>Kilka informacji na początek:</p>
              <ul>
                <li>Test składa się z 20 losowo wybranych pytań.</li>
                <li>W ramach pomocy masz do wykorzystania trzy koła ratunkowe.</li>
                <li>Każde koło ratunkowe jest do wykorzystania tylko raz.</li>
                <li>Nie śpiesz się!</li>
                <li>Powodzenia i miłej zabawy ;)</li>
              </ul>
            </div>
          </div>
          <div className='middle'>
            <div className='categoryButton' data-category='poczatki'>Początki państwa polskiego</div>
            <div className='categoryButton' data-category='introduction'>Zapoznanie się z historią - nauką o przeszłości</div>
          </div>
          <div className='right'>
            <div className='mieszkoSays'>Wybierz kategorię!</div>
            <div className='arrow'></div>
          </div>
        </section>
    )
  }
}

export default Category;
