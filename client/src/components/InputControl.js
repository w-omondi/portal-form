import React from "react";
import "./InputControl.css";

export default function InputControl(props) {
  let el = "";
  if (props.type === "textArea") {
    el = (
      <textarea
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder="Your answer"
        onChange={props.onChange}
        width="90"
      />
    );
  } else if (props.type === "checkbox") {
    el = props.checks.map((item, i) => (
      <div className="checkbox-wrapper" key={i}>
        <input
          type="checkbox"
          name={props.name}
          onChange={props.onChange}
          placeholder="Your answer"
          value={item}
        />
        <label>{item}</label>
      </div>
    ));
  } else {
    el = (
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder="Your answer"
        onChange={props.onChange}
      />
    );
  }
  return (
    <div className="input-wrapper">
      <span>{props.label}</span>
      {el}
    </div>
  );
}
