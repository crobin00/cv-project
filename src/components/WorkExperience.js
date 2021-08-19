import WorkAndEducation from './WorkAndEducation';
import CardInfo from './CardInfo';
import SubmitButton from './SubmitButton';
import WorkAndEducationTab from './WorkAndEducationTab';
import ErrorHandling from './ErrorHandling';
import { useState } from 'react';
import uniqid from 'uniqid';

const WorkExperience = (props) => {
  const [jobTitle, setJobTitle] = useState('');
  const [city, setCity] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [error, setError] = useState(false);

  const removeError = () => {
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      jobTitle === '' ||
      city === '' ||
      companyName === '' ||
      startDate === '' ||
      endDate === '' ||
      responsibilities === ''
    ) {
      setError(true);
      return;
    }

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
    setError(false);
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
      {error ? <ErrorHandling /> : null}
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
          firstInputChange={(e) => {
            setJobTitle(e.target.value);
            removeError();
          }}
          firstValue={jobTitle}
          secondInput="City/State"
          secondInputChange={(e) => {
            setCity(e.target.value);
            removeError();
          }}
          secondValue={city}
          thirdInput="Company Name"
          thirdInputChange={(e) => {
            setCompanyName(e.target.value);
            removeError();
          }}
          thirdValue={companyName}
          startDateChange={(e) => {
            setStartDate(e.target.value);
            removeError();
          }}
          startDateValue={startDate}
          endDateChange={(e) => {
            setEndDate(e.target.value);
            removeError();
          }}
          endDateValue={endDate}
        />
        <div>
          <textarea
            name="responsibilities"
            id="responsibilities"
            placeholder="Enter any work responsibilities here..."
            rows="4"
            cols="30"
            onChange={(e) => {
              setResponsibilities(e.target.value);
              removeError();
            }}
            value={responsibilities}
          />
        </div>
        <SubmitButton text="Add work experience" />
      </form>
    </CardInfo>
  );
};

export default WorkExperience;
