import React from "react";
import MultipleChoices from "./MultipleChoices";

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
    el = (
      <MultipleChoices element={props.name} checks={props.checks} setValue={props.setValue} />
    );
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
