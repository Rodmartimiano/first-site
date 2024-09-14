import "./App.css";
import BasicButton from "./components/BasicButton/BasicButton";

function App() {
  return (
    <div style={{ padding: 50, display: "flex", gap: 10 }}>
      <BasicButton label="Button" appearence="primary" size="small" />
      <BasicButton label="Button" appearence="primary" size="medium" />
      <BasicButton label="Button" appearence="secondary" size="small" />
      <BasicButton label="Button" appearence="secondary" size="medium" />
      <BasicButton label="Button" appearence="tertiary" size="small" />
      <BasicButton label="Button" appearence="tertiary" size="medium" />
    </div>
  );
}

export default App;
