const PrimayBtn = (props) => {
    return (
        <button className="primaryButton" onClick={props.onClick}>
            {props.text}
        </button>

    );
};

export default PrimayBtn;
