import RotatingSign from './RotatingSign';

import classes from './QuestionSection.module.css';

export interface Props {
  question: string;
  answer: string;
}

const QuestionSection = (props: Props) => {
  return (
    <div className={classes.container}>
      <RotatingSign question={props.question} answer={props.answer} />
      <div className={classes.archeologist}></div>
    </div>
  );
};

export default QuestionSection;
