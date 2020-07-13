import React from 'react';
import axios from 'axios';

import MyCard from './components/MyCard'

class App extends React.Component {
  state = {
    myCard: [],
    followerCards: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/Freet8707')
    .then(res => {        
      console.log(res)
      this.setState({
        myCard: res.data
      })
    })
    .catch(err => console.log('jf: App.js: App: CDM: error', err))
  }
  
  componentDidUpdate(prevProps, prevState){
    if (prevState.myCard !== this.state.myCard) {
      console.log('myCard has been updated')
      axios.get('https://api.github.com/users/Freet8707/followers')
      .then(res => {
        console.log(res)
        this.setState({
          followerCards: res.data
        })
      })
      .catch(err => console.log('error', err))
    }
  }
  
  render() {
    return (
      <div>
          <h1 style={{textAlign: 'center', fontFamily: '"Montserrat", sans-serif', fontSize: '2.5rem'}}>Github User Cards!</h1>
          <MyCard card={this.state.myCard} followerCards={this.state.followerCards} />
      </div>
    );
  }
}

export default App;
