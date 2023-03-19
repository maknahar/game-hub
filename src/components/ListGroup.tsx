import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Delhi", "Mumbai", "Lucknow", "Chennai", "Bangalore"];
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No Item Found</p>}
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
