import classes from '../styles/Dropdown.module.css';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = (props) => {
  return (
    <div>
      <button className={classes.button}>
        <span>{props.title}</span>
        <span className={classes.dropDownIcon}>
          <FaChevronDown />
        </span>
      </button>
      {props.content}
    </div>
  );
};

export default Dropdown;
