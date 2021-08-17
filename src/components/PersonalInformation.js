import CardInfo from './CardInfo';
import classes from '../styles/PersonalInformation.module.css';

const PersonalInformation = (props) => {
  return (
    <CardInfo>
      <form>
        <div className={classes.twoGrid}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={props.firstName}
              onChange={(e) => props.setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={props.lastName}
              onChange={(e) => props.setLastName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            value={props.phoneNumber}
            onChange={(e) => props.setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={classes.twoGrid}>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={props.city}
              onChange={(e) => props.setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="state">State/Province</label>
            <input
              type="text"
              id="state"
              value={props.state}
              onChange={(e) => props.setState(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
          />
        </div>
      </form>
    </CardInfo>
  );
};

export default PersonalInformation;
