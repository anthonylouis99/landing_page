import React from "react";
import data from "./BoxesData";
import Boxes from "./Boxes";
import Header from "./Header";

function Body() {
  const [boxes, setBoxes] = React.useState(data);
  const [name, setName] = React.useState("");

  function toggle(par) {
    addName(par);
    setBoxes((prvBox) => {
      return prvBox.map((box) => {
        return box.id === par ? { ...box, on: !box.on } : box;
      });
    });
  }

  function addName(prop) {
    setName(() => {
      return boxes.map((box) => {
        return box.id === prop ? box.Name : "";
      });
    });
  }

  let displayBoxes = boxes.map((box) => {
    return (
      <Boxes
        key={box.id}
        id={box.id}
        Names={box.Name}
        bool={box.on}
        toggle={toggle}
      />
    );
  });

  return (
    <>
      <Header name={name} />
      {displayBoxes}
    </>
  );
}
export default Body;
