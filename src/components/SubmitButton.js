import classes from '../styles/SubmitButton.module.css';

const SubmitButton = (props) => {
  return (
    <div>
      <button className={classes.button}>{props.text}</button>
    </div>
  );
};

export default SubmitButton;
