import React, { Component } from 'react';
 import './hero.css';
import UserInput from './UserInput'
import UserOutput from './UserOutput'

interface IState{

}

interface IProps{
    name: string;
}




class Hero extends Component<IProps, {}>  {

  state = {
    userName: 'Joe'
  }

  inputChanged = (event: React.FormEvent<HTMLFormElement>) => {
    this.setState({
      userName: event.currentTarget.value
    })
  }

  render() {
    return (
      <div className="hero">
       <p>{this.props.name}</p>

      </div>
    );
  }
}

export default Hero;
