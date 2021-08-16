import WorkAndEducation from './WorkAndEducation';
import CardInfo from './CardInfo';

const WorkExperience = () => {
  return (
    <CardInfo>
      <form>
        <WorkAndEducation
          firstInput="Job Title"
          secondInput="City/Town"
          thirdInput="Company Name"
        />
      </form>
    </CardInfo>
  );
};

export default WorkExperience;
