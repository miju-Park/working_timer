import React, { Component } from "react";
import Toolbar from "./Components/Toolbar";
import SideDrawer from "./Components/SideDrawer";
import "./index.css";
import Backdrop from "./Components/Backdrop";
import Timer from "./Components/Timer";
class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px", height: "650px" }}>
          <Timer />
        </main>
      </div>
    );
  }
}

export default App;
