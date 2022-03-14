import React from "react";
import MultipleChoices from "./MultipleChoices";
import { Link } from '@reach/router'
import FileUploader from "./FileUploader";

export default function InputControl(props) {
  let el = '';
  switch (props.type) {
    case "textArea":
      el = (
        <div className="input-wrapper">
          <span>{props.label}</span>
          <textarea
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder="Your answer"
            onChange={props.onChange}
            width="90"
            required={props.required}
          />
        </div>
      )
      break;

    case "checkbox":
      el = (
        <div className="input-wrapper">
          <span>{props.label}</span>
          <MultipleChoices element={props.name} checks={props.checks} setValue={props.setValue} />
        </div>
      );
      break;
    case "file":
      el = (<div className="input-wrapper">
        <span>{props.label}</span>
        <FileUploader element={props.name} setValue={props.setValue} />
      </div>
      );
      break;
    default:
      el = (
        <div className="input-wrapper">
          <span>{props.label}</span>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder="Your answer"
            onChange={props.onChange}
            required={props.required}
          />
        </div>
      );
      break;
  }
  return el;
}
