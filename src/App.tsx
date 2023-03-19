import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Delhi", "Mumbai", "Lucknow", "Chennai", "Bangalore"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSlectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
