import React from 'react';
import axios from 'axios'

class App extends React.Component {
  state = {
    myCard: []
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
  
  render() {
    return (
      <div>
          <h1 style={{textAlign: 'center'}}>Github User Cards!</h1>
      </div>
    );
  }
}

export default App;
