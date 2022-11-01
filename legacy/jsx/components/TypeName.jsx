import React from 'react';

class TypeName extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <form className="typeName">
        <input type="text" placeholder="Podaj swoje imię :)" onChange={this.props.getName}/>
        <button onClick={this.props.type}>OK</button>
      </form>
    )
  }
}

export default TypeName;
