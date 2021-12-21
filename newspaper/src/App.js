import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyCssCategory.css";
import MyCategory from "./components/MyCategory";
import MyNavBar from "./components/MyNavBar";
import "./App.css";

export default class App extends React.Component {
  state = {
    searchQuery: "",
  };

  setSearchQuery = (search) => {
    this.setState({ searchQuery: search });
    console.log(search);
  };

  render() {
    return (
      <div className="App">
        <MyNavBar/>
        <MyCategory setSearchQuery={this.setSearchQuery} />
      </div>
    );
  }
}
