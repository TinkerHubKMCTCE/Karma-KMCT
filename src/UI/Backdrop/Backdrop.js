import classes from "./Backdrop.module.css"

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop}>{props.children}</div>
  )
}

export default Backdrop