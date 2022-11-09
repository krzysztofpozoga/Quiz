import { Props } from './QuestionSection';

import classes from './RotatingSign.module.css';

const RotatingSign = (props: Props) => {
    return (
      <div className={classes.container}>
        <div className={classes.textArea}>
          <div className={classes.front}>{props.question}</div>
          <div className={classes.back}>{props.answer}</div>
        </div>
        <div className={classes.arrow}></div>
        <div className={classes.questionMark}></div>
      </div>
    );
  };

  export default RotatingSign;