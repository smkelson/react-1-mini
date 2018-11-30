import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }


  updatePicture(value) {
    this.setState({
      picture: value
    })
  }
  updateName(value) {
    this.setState({
      name: value
    })
  }
  addFriend() {
    let newFriends = this.state.friends.slice();
    newFriends.push ({name : this.state.name, picture : this.state.picture });
    this.setState({
      friends: newFriends,
      Picture: '',
      name: ''
    })

  }

  render() {
  const friends = this.state.friends.map((friend, index) => (
   <div key={index}>
      <span>
        {friend.name}
      </span>
      <img src={friend.picture} alt='friend pic'/>
      
   </div> 
  ))
      return (
      <div>
        <label>URL to picture</label>
        <input onChange={(e) => this.updatePicture(e.target.value)} value={this.state.picture} />
        <label>Friends Name</label>
        <input onChange={(e) => this.updateName(e.target.value)}
          value={this.state.name} />
        <button onClick={() => this.addFriend()}>Add Friend</button>

        {friends}

      </div>
    );
  }
}
export default App;
