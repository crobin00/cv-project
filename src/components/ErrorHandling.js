import classes from '../styles/ErrorHandling.module.css';

const ErrorHandling = () => {
  return (
    <div className={classes.error}>
      <span>Please fill out all fields</span>
    </div>
  );
};

export default ErrorHandling;
