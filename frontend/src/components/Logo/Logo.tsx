import React from "react";
import "./Logo.css";

type LogoSizes = "small" | "medium";

type LogoColor = "primary" | "secondary" | "tertiary";

type LogoParams = {
  label: string;
  size: LogoSizes;
  appearence: LogoColor;
};

function getLogoParam(params: LogoParams) {
  return "Logo size-" + params.size + " appearence-" + params.appearence;
}

export default function Logo(params: LogoParams) {
  return <h1 className={getLogoParam(params)}>{params.label}</h1>;
}
