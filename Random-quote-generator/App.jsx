import "./styles.css";
import { useState } from "react";
//import like this 
const quotes = [
  "You will face many defeats in life, but never let yourself be defeated",
  "In the end, it is not the years in your life that count",
  "Never let the fear of striking out keep you from playing the game",
  "When you have a dream, you've got to grab it and never let go",
  "Nothing is impossible",
  "There is nothing impossible to they who will try"
];
export default function App() {
  const [quote, setQuotes] = useState(quotes[0]);

  function ramdomiz() {
    let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    setQuotes(randomQuotes);
  }

  return (
    <div className="App">
      <h1>{quote}</h1>
      <button onClick={ramdomiz}>click me</button>
    </div>
  );
}
