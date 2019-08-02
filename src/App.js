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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    userData(this.state.username)
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
  };
  handleInput = e => {
    this.setState({ username: e.target.value });
  };
  handleClear = e => {
    this.setState({ username: "", img: null });
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
