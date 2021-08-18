import CardInfo from './CardInfo';
import WorkAndEducation from './WorkAndEducation';
import WorkAndEducationTab from './WorkAndEducationTab';
import SubmitButton from './SubmitButton';
import ErrorHandling from './ErrorHandling';
import { useState } from 'react';
import uniqid from 'uniqid';

const Education = (props) => {
  const [degree, setDegree] = useState('');
  const [city, setCity] = useState('');
  const [institution, setInstitution] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState(false);

  const removeError = () => {
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      degree === '' ||
      city === '' ||
      institution === '' ||
      startDate === '' ||
      endDate === ''
    ) {
      setError(true);
      return;
    }

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
    setError(false);
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
      {error ? <ErrorHandling /> : null}
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
          firstInputChange={(e) => {
            setDegree(e.target.value);
            removeError();
          }}
          firstValue={degree}
          secondInput="City/State"
          secondInputChange={(e) => {
            setCity(e.target.value);
            removeError();
          }}
          secondValue={city}
          thirdInput="Institution"
          thirdInputChange={(e) => {
            setInstitution(e.target.value);
            removeError();
          }}
          thirdValue={institution}
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
        <SubmitButton text="Add education" />
      </form>
    </CardInfo>
  );
};

export default Education;
