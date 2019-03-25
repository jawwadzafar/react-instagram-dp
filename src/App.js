import React, { Component } from 'react';
import userData from './api/userData';



class App extends Component {
  constructor(){
    super();
    this.state={
      img:'https://via.placeholder.com/150'
    }
  }
handleSubmit = (e)=>{
  e.preventDefault();
  // console.log(this.refs.username.value)
  userData(this.refs.username.value).then(data=>{
    console.log(data)
    this.setState({
      img:data.hd_profile_pic_url_info.url,
    })
  });
  
}

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
      <input ref="username"/>
      <button type="submit">send</button>
      <img src={this.state.img}/>
      </form>
      </div>
    );
  }
}

export default App;
