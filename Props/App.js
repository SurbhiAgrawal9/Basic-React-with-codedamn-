js```
import Custom from "./Custom";
import "./styles.css";

export default function App() {
  const age = 20;
  return (
    <div className="App">
      <Custom name={age ** 2} greeting="bonjour" />{" "}
      {/* props = {name:"surbhi"} */}
    </div>
  );
}
```
