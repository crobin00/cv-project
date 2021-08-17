import classes from '../styles/WorkAndEducationTab.module.css';
import { FaTrashAlt, FaPen } from 'react-icons/fa';

const WorkAndEducationTab = (props) => {
  return (
    <div className={classes.tab}>
      <div>
        <h4>{props.title}</h4>
        <p>
          {props.startDate} - {props.endDate}
        </p>
      </div>
      <div className={classes.icons}>
        <FaTrashAlt onClick={props.onDelete} />
        <FaPen onClick={props.onEdit} />
      </div>
    </div>
  );
};

export default WorkAndEducationTab;
