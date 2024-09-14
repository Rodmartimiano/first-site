import "./BasicButton.css";

type BasicButtonParams = {
  label: string;
};

export default function BasicButton(params: BasicButtonParams) {
  return <button className="BasicButton">{params.label}</button>;
}
