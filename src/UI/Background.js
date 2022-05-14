import classes from "./Background.module.css";

const Background = (props) => {
  return (
    <div className={`${classes.background} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Background;
