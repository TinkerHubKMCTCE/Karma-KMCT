const PrimaryBtn = (props) => {
  let padd = props.pad ?? "1.5rem 1.7rem";
  return (
    <button
      className="primaryButton"
      onClick={props.onClick ?? (() => {})}
      style={{
        margin: props.margin ?? "0px",
        fontSize: props.fontSize ?? "2rem",
        padding: padd
      }}
    >
      {props.text}
    </button>
  );
};

export default PrimaryBtn;
