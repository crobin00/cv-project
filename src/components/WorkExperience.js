import WorkAndEducation from './WorkAndEducation';
import CardInfo from './CardInfo';
import SubmitButton from './SubmitButton';
import WorkAndEducationTab from './WorkAndEducationTab';
import { useState } from 'react';
import uniqid from 'uniqid';

const WorkExperience = (props) => {
  const [jobTitle, setJobTitle] = useState('');
  const [city, setCity] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.setWorkExperienceArray([
      ...props.workExperienceArray,
      {
        id: uniqid(),
        jobTitle: jobTitle,
        city: city,
        companyName: companyName,
        startDate: startDate,
        endDate: endDate,
        responsibilities: responsibilities,
      },
    ]);

    setJobTitle('');
    setCity('');
    setCompanyName('');
    setStartDate('');
    setEndDate('');
    setResponsibilities('');
    console.log(props.workExperienceArray);
  };

  const deleteHandler = (id) => {
    props.setWorkExperienceArray(
      props.workExperienceArray.filter((item) => item.id !== id)
    );
  };

  const editHandler = (id) => {
    props.workExperienceArray.forEach((item) => {
      if (item.id === id) {
        setJobTitle(item.jobTitle);
        setCity(item.city);
        setCompanyName(item.companyName);
        setStartDate(item.startDate);
        setEndDate(item.endDate);
        setResponsibilities(item.responsibilities);
      }
    });
    deleteHandler(id);
  };

  return (
    <CardInfo>
      {props.workExperienceArray.map((item) => (
        <WorkAndEducationTab
          key={item.id}
          title={item.jobTitle}
          startDate={item.startDate}
          endDate={item.endDate}
          onDelete={() => deleteHandler(item.id)}
          onEdit={() => editHandler(item.id)}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <WorkAndEducation
          firstInput="Job Title"
          firstInputChange={(e) => setJobTitle(e.target.value)}
          firstValue={jobTitle}
          secondInput="City/State"
          secondInputChange={(e) => setCity(e.target.value)}
          secondValue={city}
          thirdInput="Company Name"
          thirdInputChange={(e) => setCompanyName(e.target.value)}
          thirdValue={companyName}
          startDateChange={(e) => setStartDate(e.target.value)}
          startDateValue={startDate}
          endDateChange={(e) => setEndDate(e.target.value)}
          endDateValue={endDate}
        />
        <div>
          <textarea
            name="responsibilities"
            id="responsibilities"
            rows="4"
            cols="30"
            onChange={(e) => setResponsibilities(e.target.value)}
            value={responsibilities}
          />
        </div>
        <SubmitButton text="Add work experience" />
      </form>
    </CardInfo>
  );
};

export default WorkExperience;
