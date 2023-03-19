import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Delhi", "Mumbai", "Lucknow", "Chennai", "Bangalore"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
