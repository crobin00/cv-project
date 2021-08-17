import SwapViewButton from './components/SwapViewButton';
import Dropdown from './components/Dropdown';
import PersonalInformation from './components/PersonalInformation';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import PreviewPDF from './components/PreviewPDF';
import { PDFViewer } from '@react-pdf/renderer';
import './styles/App.css';
import { FaCheckSquare, FaEdit } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [editPage, setEditPage] = useState(true);
  const [workExperienceArray, setWorkExperienceArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);
  const [personalInformationArray, setPersonalInformationArray] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = (e) => {
    setPersonalInformationArray({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      city: city,
      state: state,
      email: email,
    });
    setEditPage(() => !editPage);
    console.log(personalInformationArray);
  };

  return (
    <div className="container">
      <SwapViewButton
        text={editPage ? 'Preview' : 'Edit'}
        onSwitch={handleClick}
        src={editPage ? <FaCheckSquare /> : <FaEdit />}
      />
      <div style={editPage ? { display: 'block' } : { display: 'none' }}>
        <Dropdown
          title="Personal Info"
          content={
            <PersonalInformation
              firstName={firstName}
              lastName={lastName}
              phoneNumber={phoneNumber}
              city={city}
              state={state}
              email={email}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setPhoneNumber={setPhoneNumber}
              setCity={setCity}
              setState={setState}
              setEmail={setEmail}
            />
          }
        />
        <Dropdown
          title="Work Experience"
          content={
            <WorkExperience
              workExperienceArray={workExperienceArray}
              setWorkExperienceArray={setWorkExperienceArray}
            />
          }
        />
        <Dropdown
          title="Education"
          content={
            <Education
              educationArray={educationArray}
              setEducationArray={setEducationArray}
            />
          }
        />
      </div>
      <div style={!editPage ? { display: 'block' } : { display: 'none' }}>
        <PDFViewer style={{ width: '100vw', height: '100vh' }}>
          <PreviewPDF
            personalInformation={personalInformationArray}
            workExperience={workExperienceArray}
            education={educationArray}
          />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
