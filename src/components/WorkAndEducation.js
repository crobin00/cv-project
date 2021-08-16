import classes from '../styles/WorkAndEducation.module.css';

const WorkAndEducation = (props) => {
  return (
    <div>
      <div className={classes.twoGrid}>
        <div>
          <label htmlFor={props.firstInput}>{props.firstInput}</label>
          <input type="text" id={props.firstInput} />
        </div>
        <div>
          <label htmlFor={props.secondInput}>{props.secondInput}</label>
          <input type="text" id={props.secondInput} />
        </div>
      </div>
      <div>
        <label htmlFor={props.thirdInput}>{props.thirdInput}</label>
        <input type="text" id={props.thirdInput} />
      </div>
      <div className={classes.twoGrid}>
        <div>
          <label htmlFor="start-date">Start date</label>
          <input type="date" id="start-date" />
        </div>
        <div>
          <label htmlFor="end-date">End date</label>
          <input type="date" id="end-date" />
        </div>
      </div>
    </div>
  );
};

export default WorkAndEducation;
