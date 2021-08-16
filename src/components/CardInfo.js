import classes from '../styles/CardInfo.module.css';

const CardInfo = (props) => {
  return <div className={classes.cardInfo}>{props.children}</div>;
};

export default CardInfo;
