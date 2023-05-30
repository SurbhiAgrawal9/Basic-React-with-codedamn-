import "./styles.css";

export default function App() {
  function buttonClick() {
    console.log("button is clicked");
    alert("helloooo");
  }
  return (
    <div className="App">
      <button onClick={buttonClick}>click me</button>
    </div>
  );
}
