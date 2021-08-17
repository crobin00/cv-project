import classes from '../styles/WorkAndEducation.module.css';

const WorkAndEducation = (props) => {
  return (
    <div>
      <div className={classes.twoGrid}>
        <div>
          <label htmlFor={props.firstInput}>{props.firstInput}</label>
          <input
            type="text"
            id={props.firstInput}
            onChange={props.firstInputChange}
            value={props.firstValue}
          />
        </div>
        <div>
          <label htmlFor={props.secondInput}>{props.secondInput}</label>
          <input
            type="text"
            id={props.secondInput}
            onChange={props.secondInputChange}
            value={props.secondValue}
          />
        </div>
      </div>
      <div>
        <label htmlFor={props.thirdInput}>{props.thirdInput}</label>
        <input
          type="text"
          id={props.thirdInput}
          onChange={props.thirdInputChange}
          value={props.thirdValue}
        />
      </div>
      <div className={classes.twoGrid}>
        <div>
          <label htmlFor="start-date">Start date</label>
          <input
            type="date"
            id="start-date"
            onChange={props.startDateChange}
            value={props.startDateValue}
          />
        </div>
        <div>
          <label htmlFor="end-date">End date</label>
          <input
            type="date"
            id="end-date"
            onChange={props.endDateChange}
            value={props.endDateValue}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkAndEducation;
