import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        text="First Button"
        onButtonClick={(e) => console.log(e)}
      ></Button>
    </div>
  );
}

export default App;
