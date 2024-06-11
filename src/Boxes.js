function Boxes(props) {
  let Styles = {
    height: "150px",
    width: "150px",
    border: "1px solid",
    borderRadius: "10px",
    display: "inline-block",
    backgroundColor: props.bool ? "#000000" : "#ffff",
  };
  return (
    <>
      <div style={Styles} onClick={() => props.toggle(props.id)}>
        {" "}
        <p>{props.Names}</p>
      </div>
    </>
  );
}

export default Boxes;
