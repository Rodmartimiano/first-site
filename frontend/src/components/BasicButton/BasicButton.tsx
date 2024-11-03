import React from "react";
import "./BasicButton.css";

type ButtonSizes = "small" | "medium";

type ButtonAppearences = "primary" | "secondary" | "tertiary";

type BasicButtonParams = {
  label: string;
  size: ButtonSizes;
  appearence: ButtonAppearences;
};

function getButtonClasses(params: BasicButtonParams) {
  return (
    "BasicButton size-" + params.size + " appeareance-" + params.appearence
  );
}

export default function BasicButton(params: BasicButtonParams) {
  return <button className={getButtonClasses(params)}>{params.label}</button>;
}
