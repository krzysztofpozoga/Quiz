import { Fragment } from 'react';

import QuestionSection from '../components/home-page/QuestionSection';
import Title from '../components/home-page/Title';

const HomePage = () => {
  return (
    <Fragment>
      <QuestionSection
        question={'Hmmm...Pierwszym królem Polski był...?'}
        answer={'Bolesław I Chrobry'}
      />
      <Title />
    </Fragment>
  );
};

export default HomePage;
