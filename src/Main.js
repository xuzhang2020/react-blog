import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Detail from "./Detail";
import ScrollToTop from "./ScrollToTop";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
		<ScrollToTop>
            <Route exact path="/" component={Home}/>
            <Route path="/detail" component={Detail}/>
		</ScrollToTop>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;