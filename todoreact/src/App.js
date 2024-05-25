import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  const [showMainn, setShowMainn] = useState(false);
  const [items, setItems] = useState([]);

  const displayFunc = function () {
    setShowMainn(true);
    setItems([...items, first]);
    setFirst("");
  };
  return (
    <div className="container">
      <h1>TO-DO</h1>
      <div className="upper-por">
        <input
          type="search"
          className="search-box"
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
        <button className="add-btn" onClick={displayFunc}>
          Add
        </button>
      </div>
      <div className="main-container">
        {items.map((items, index) => (
          <Mainn para={items} key={index} />
        ))}
      </div>
    </div>
  );
}
function Mainn({ para, first, setFirst }) {
  const [remove, setRemove] = useState(true);
  const [firstt, setFirstt] = useState("");
  const [edit, setEdit] = useState(para);
  const [display, setDisplay] = useState("none");
  const removeHandle = function () {
    setRemove(false);
  };
  const editHandle = function (e) {
    setDisplay("flex");
  };
  const updateFunc = function () {
    setEdit(firstt);
    setDisplay("none");
  };
  return (
    remove && (
      <div className="flex-them">
        <p>{edit}</p>
        <input
          style={{ display: display }}
          type="search"
          value={firstt}
          onChange={(e) => {
            setFirstt(e.target.value);
          }}
        />
        <button style={{ display: display }} onClick={updateFunc}>
          update
        </button>
        <button className="edit-button" onClick={editHandle}>
          Edit
        </button>
        <button className="remove-btn" onClick={removeHandle}>
          Remove
        </button>
      </div>
    )
  );
}
export default App;
