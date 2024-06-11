function Switch(props) {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label
        onClick={props.handleSwitch}
        htmlFor="check"
        className="label"
      ></label>
    </div>
  );
}

export default Switch;
