import React from "react";
import "./DrawerToggleButton.css";

const drawerToggleButton = props => (
  <button class="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggleButton;
