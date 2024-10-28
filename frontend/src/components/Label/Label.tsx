import "./Label.css";

type LabelSize = "small" | "medium";

type LabelAppearence = "primary" | "secondary";

type LabelParams = {
  label: string;
  size: LabelSize;
  appearence: LabelAppearence;
};

function getLabelParams(params: LabelParams) {
  return "Label size-" + params.size + " appearence-" + params.appearence;
}

export default function Label(params: LabelParams) {
  return <label className={getLabelParams(params)}>{params.label}</label>;
}
