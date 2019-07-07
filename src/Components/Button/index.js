import React from "react";
import { Button, Icon } from "antd";

const MyButton = props => (
  <Icon
    style={{ outline: "none" }}
    onClick={() => alert("click")}
    type={props.isPlaying ? "pause-circle" : "play-circle"}
    theme="twoTone"
    twoToneColor="#ffcc99"
    style={{ fontSize: "100px" }}
  />
);

export default MyButton;
