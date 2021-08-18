import classes from '../styles/Dropdown.module.css';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = (props) => {
  return (
    <div>
      <button className={classes.button} onClick={props.setVisibility}>
        <span>{props.title}</span>
        <span
          className={
            !props.visible ? classes.dropDownIcon : classes.dropDownIconFlip
          }
        >
          <FaChevronDown />
        </span>
      </button>
      <div
        className={props.visible ? classes.card_visible : classes.card_hidden}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Dropdown;
