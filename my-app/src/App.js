import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import PokeCard from "./components/PokeCard";
import Score from "./components/Score";
import pokes from "./pokes.json";


class App extends Component {
  state = {
    message: "Click any Pokémon to start. But don't click it twice or you lose!",
    highScore: 0,
    runningScore: 0,
    pokes: pokes,
    unselectedPokes: pokes
  }

  //invoked to load component data
  componentDidMount() {
  }

  //function to shuffle pokemon
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectPoke = name => {
    const findPoke = this.state.unselectedPokes.find(item => item.name === name);

    if (findPoke === undefined) {
      // user selects a pokemon that's already been selected
      this.setState({
        message: "You already guessed that Pokémon!",
        highScore: (this.state.runningScore > this.state.highScore) ? this.state.runningScore : this.state.highScore,
        runningScore: 0,
        pokes: pokes,
        unselectedPokes: pokes
      });
    }
    else {
      // success to select a new pokemon
      const newPokes = this.state.unselectedPokes.filter(item => item.name !== name);

      this.setState({
        message: "Keep guessing!",
        runningScore: this.state.runningScore + 1,
        pokes: pokes,
        unselectedPokes: newPokes
      });
    }

    this.shuffleArray(pokes);
  };
  render() {
    return (
      <div>
     
          <h1>Click-a-Pokémon</h1>
        
        <Score
          message={this.state.message}
          runningScore={this.state.runningScore}
          highScore={this.state.highScore}
        />
        <Wrapper>
          {
            this.state.pokes.map(poke => (
              <PokeCard
                name={poke.name}
                image={poke.image}
                selectPoke={this.selectPoke}
                runningScore={this.state.runningScore}
              />
            ))
          }
        </Wrapper>
        
      </div>
    );
  }
}
export default App;
