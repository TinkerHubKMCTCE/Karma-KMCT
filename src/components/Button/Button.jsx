const PrimaryBtn = (props) => {
  return (
    <button
      className="primaryButton"
      onClick={props.onClick ?? (() => {})}
      style={{
        margin: props.margin ?? "0px",
        fontSize: props.fontSize ?? "2rem",
      }}
    >
      {props.text}
    </button>
  );
};

export default PrimaryBtn;
