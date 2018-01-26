import React from 'react';

class TypeName extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <form className="typeName">
        <input type="text" placeholder="Podaj swoje imię i nazwisko"/>
        <button>OK</button>
      </form>
    )
  }
}

export default TypeName;
