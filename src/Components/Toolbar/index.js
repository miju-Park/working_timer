import React from "react";
import "../SideDrawer/drawerToggleButton";
import "./index.css";
import DrawerToggleButton from "../SideDrawer/drawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">HONEY WORK</a>
      </div>
      <div className="spacer" />
      <div class="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Timer</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
