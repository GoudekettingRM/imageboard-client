import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import ImagesListContainer from "./components/ImagesList/ImagesListContainer";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AddNewImageContainer from "./components/AddNewImage/AddNewImageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/images" exact component={ImagesListContainer} />
          <Route path="/upload" exact component={AddNewImageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
