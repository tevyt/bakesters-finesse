import React, { Component } from "react"; //eslint-disable-line
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./screens/home";
import Contact from "./screens/contact";
import About from "./screens/about";

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

  deactivateNavbar() {
    this.setState({ isNavbarActive: false });
  }

  render() {
    return (
      <Router>
        <div className="app container font-regular">
          <Header
            isNavbarActive={this.state.isNavbarActive}
            onNavBurgerClick={this.toggleNavbarActive.bind(this)}
            onNavLinkClick={this.deactivateNavbar.bind(this)}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
