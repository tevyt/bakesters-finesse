import React, { Component } from "react"; //eslint-disable-line
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./screens/home";
import Gallery from "./screens/gallery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isNavbarActive: false };
  }

  toggleNavbarActive() {
    this.setState(state => ({
      isNavbarActive: !state.isNavbarActive
    }));
  }
  render() {
    return (
      <Router>
        <div className="app container font-regular">
          <Header
            isNavbarActive={this.state.isNavbarActive}
            onNavBurgerClick={this.toggleNavbarActive.bind(this)}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
