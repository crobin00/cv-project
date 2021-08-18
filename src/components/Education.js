import CardInfo from './CardInfo';
import WorkAndEducation from './WorkAndEducation';
import WorkAndEducationTab from './WorkAndEducationTab';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import uniqid from 'uniqid';

const Education = (props) => {
  const [degree, setDegree] = useState('');
  const [city, setCity] = useState('');
  const [institution, setInstitution] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.setEducationArray([
      ...props.educationArray,
      {
        id: uniqid(),
        degree: degree,
        city: city,
        institution: institution,
        startDate: startDate,
        endDate: endDate,
      },
    ]);

    setDegree('');
    setCity('');
    setInstitution('');
    setStartDate('');
    setEndDate('');
  };

  const deleteHandler = (id) => {
    props.setEducationArray(
      props.educationArray.filter((item) => item.id !== id)
    );
  };

  const editHandler = (id) => {
    props.educationArray.forEach((item) => {
      if (item.id === id) {
        setDegree(item.degree);
        setCity(item.city);
        setInstitution(item.institution);
        setStartDate(item.startDate);
        setEndDate(item.endDate);
      }
    });
    deleteHandler(id);
  };

  return (
    <CardInfo>
      {props.educationArray.map((item) => (
        <WorkAndEducationTab
          key={item.id}
          title={item.degree}
          startDate={item.startDate}
          endDate={item.endDate}
          onDelete={() => deleteHandler(item.id)}
          onEdit={() => editHandler(item.id)}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <WorkAndEducation
          firstInput="Degree"
          firstInputChange={(e) => setDegree(e.target.value)}
          firstValue={degree}
          secondInput="City/State"
          secondInputChange={(e) => setCity(e.target.value)}
          secondValue={city}
          thirdInput="Institution"
          thirdInputChange={(e) => setInstitution(e.target.value)}
          thirdValue={institution}
          startDateChange={(e) => setStartDate(e.target.value)}
          startDateValue={startDate}
          endDateChange={(e) => setEndDate(e.target.value)}
          endDateValue={endDate}
        />
        <SubmitButton text="Add education" />
      </form>
    </CardInfo>
  );
};

export default Education;
