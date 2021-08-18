import classes from '../styles/WorkAndEducationTab.module.css';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { format } from 'date-fns';

const WorkAndEducationTab = (props) => {
  return (
    <div className={classes.tab}>
      <div>
        <h4>{props.title}</h4>
        <p>
          {format(new Date(props.startDate), 'MM/yyyy')} -{' '}
          {format(new Date(props.endDate), 'MM/yyyy')}
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
