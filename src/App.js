import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import Searchbox from './Searchbox';
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state ={
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
  }
  render() {
    const filterRobot= this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div>
      <h1 className='tc'>Wall-E Robo Search built using ReactJS and Webpack</h1>
      <Searchbox searchChange={this.onSearchChange}/>
      <CardList robots= {filterRobot}/>
      </div>
    );
  }

}

export default App;
