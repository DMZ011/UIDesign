import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Radium from 'radium'

interface IPlayer {
  name: string;
  age: number;
  club: string;
  country: string;
  visible: boolean;
}

const players: IPlayer[] = [
  {
    name: 'Messi',
    age: 31,
    club: 'Barcelona',
    country: 'Argentina',
    visible: true
  },
  {
    name: 'Ronaldo',
    age: 33,
    club: 'Juventus',
    country: 'Portugal',
    visible: true
  },
  {
    name: 'Pogba',
    age: 26,
    club: 'Manchester United',
    country: 'France',
    visible: true
  }
]

class App extends Component {

  state = {
    players
  }


  removePlayer = (i: number) => {
    const { players } = this.state

    this.setState({ players: [...players.slice(0, i), ...players.slice(i + 1)] }, () => {
      console.log(this.state.players)

    })
    // let players = [...this.state.players]
    // players.splice(i, 1)

    // this.setState({
    //   players
    // })
  }

  render() {

    let playerStyle = {
      backgroundColor: 'red',
      color: 'white',
      borderBottom: '1px white solid'
    }

    return (
      <div className="App">
        {this.state.players.map((player, index) => {
          return (
            <div className="playerContainer" key={player.name} style={playerStyle}>
              <div className="playerName ">
                <span className="close" onClick={() => this.removePlayer(index)} >x </span>

                {index + 1} - {player.name}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
