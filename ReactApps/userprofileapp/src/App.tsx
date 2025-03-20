import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import UserProfil from "./components/UserProfil";
import Counter from "./components/Counter";

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello Fanny </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}> My button</Button>

      <UserProfil></UserProfil>
      <Counter></Counter>
    </div>
  );
}

export default App;
