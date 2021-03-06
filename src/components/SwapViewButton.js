import classes from '../styles/SwapViewButton.module.css';

const SwapViewButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onSwitch}>
      <span>{props.text}</span>
      <span className={classes.swapViewIcon}>{props.src}</span>
    </button>
  );
};

export default SwapViewButton;
