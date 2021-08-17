import SwapViewButton from './components/SwapViewButton';
import Dropdown from './components/Dropdown';
import PersonalInformation from './components/PersonalInformation';
import WorkExperience from './components/WorkExperience';
import './styles/App.css';
import { FaCheckSquare } from 'react-icons/fa';
//import { useState } from 'react';

function App() {
  /*const [workExperience, setWorkExperience] = useState([
    {
      id: 1,
      jobTitle: 'test job title',
      city: 'test city',
      companyName: 'test company name',
      startDate: '1/1/00',
      endDate: '2/2/00',
      responsibilities: 'did some stuff',
    },
  ]);*/

  return (
    <div className="container">
      <SwapViewButton text="Preview" src={<FaCheckSquare />} />
      <Dropdown title="Personal Info" content={<PersonalInformation />} />
      <Dropdown title="Work Experience" content={<WorkExperience />} />
    </div>
  );
}

export default App;
