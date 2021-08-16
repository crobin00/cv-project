import CardInfo from './CardInfo';
import classes from '../styles/PersonalInformation.module.css';

const PersonalInformation = (props) => {
  return (
    <CardInfo>
      <form>
        <div className={classes.twoGrid}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </div>
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input type="text" id="website" />
        </div>
        <div className={classes.twoGrid}>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div>
            <label htmlFor="state">State/Province</label>
            <input type="text" id="state" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
      </form>
    </CardInfo>
  );
};

export default PersonalInformation;
