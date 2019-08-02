import React, { Component } from "react";
import userData from "./api/userData";
import Loader from "./components/Loader";
import DisplayBox from "./components/DisplayBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      img: null,
      error: false,
      loading: false
    };
  }
  loadUserData(username) {
    userData(username)
      .then(data => {
        this.setState({
          img: data.hd_profile_pic_url_info.url,
          error: false,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ error: true, loading: false });
        console.log(err);
      });
  }

  handleSubmit = e => {
    let username = this.state.username;
    e.preventDefault();
    if (username) {
      this.setState({ loading: true });
      this.loadUserData(username);
    }
  };
  handleInput = e => {
    this.setState({ username: e.target.value });
  };
  handleClear = e => {
    this.setState({ username: "" });
  };

  render() {
    let { loading, error, img, username } = this.state;
    return (
      <div className="container">
        <div className="flex">
          <div className="box">
            <h3>Hey, Stalker!</h3>
            <h2>📸 Instagram DP</h2>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <input placeholder="✍️ Enter IG username" value={this.state.username} onChange={this.handleInput} />
                <button type="submit" className="search-button">
                  🔎<span>Search</span>
                </button>
                {username ? <button onClick={this.handleClear} class="close-icon" type="reset" /> : null}
              </form>
            </div>
            <div className="dynamic">{loading ? <Loader /> : <DisplayBox error={error} img={img} />}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
