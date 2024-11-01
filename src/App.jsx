import { useDispatch, useSelector } from "react-redux";
import { From } from "./components/from/from";
import { Card } from "./components/card/card";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <From />
      <Card />
      <h1 className="text-4xl">{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default App;
