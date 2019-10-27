import React from "react";
import "./App.css";
// import { useStateHook } from "../hooks";
import { UseEffectHook } from "../hooks";

export default class App extends React.Component {

  render() {
    return (
      <div>
        {/* <useStateHook /> */}
        <UseEffectHook />
      </div>
    );
  }
}
