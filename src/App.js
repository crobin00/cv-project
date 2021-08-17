import SwapViewButton from './components/SwapViewButton';
import Dropdown from './components/Dropdown';
import PersonalInformation from './components/PersonalInformation';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import './styles/App.css';
import { FaCheckSquare } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <SwapViewButton text="Preview" src={<FaCheckSquare />} />
      <Dropdown title="Personal Info" content={<PersonalInformation />} />
      <Dropdown title="Work Experience" content={<WorkExperience />} />
      <Dropdown title="Education" content={<Education />} />
    </div>
  );
}

export default App;
