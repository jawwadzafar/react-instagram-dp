import React, { Component } from "react";
import userData from "./api/userData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: null,
      error: false,
      errorMsg: null,
      loading: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    userData(this.refs.username.value)
      .then(data => {
        console.log(data);
        this.setState({
          img: data.hd_profile_pic_url_info.url,
          error: false,
          loading: false
        });
      })
      .catch(err => {
        console.log("from app.js", err);
        this.setState({ error: true, errorMsg: "User Not Found", loading: false });
      });
  };

  render() {
    let { loading, error, errorMsg } = this.state;
    return (
      <div className="container">
        <div className="flex">
          <div className="box">
            <h2>📸 Instagram DP</h2>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <input ref="username" placeholder="Enter username ✍️" />
                <button type="submit">
                  🔎<span>Search</span>
                </button>
              </form>
            </div>
            <div className="text-center">
              {this.state.loading ? (
                "loading...."
              ) : this.state.error ? (
                <div>{this.state.errorMsg}</div>
              ) : this.state.img ? (
                <a target={"_blank"} href={this.state.img}>
                  <div>
                    <img alt={"instagram dp"} src={this.state.img} />
                  </div>
                  Click here to View
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
