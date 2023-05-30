import "./styles.css";

export default function App() {
  const age = 25;
  return (
    <div className="App">{age > 18 ? <p> you can vote</p> : <p>yes</p>}</div>
  );
}
