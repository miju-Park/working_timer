import React from "react";
import "./index.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses.push("open");
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Timer</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
