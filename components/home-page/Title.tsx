import Link from "next/link";

import classes from './Title.module.css';

const Title = () => {
  return (
    <div className={classes.middle}>
      <h1 className={classes.title}>QUIZ HISTORYCZNY &bdquo;HISQUIZ&rdquo;</h1>
      <Link href='/category'>
        <div className={classes.button}>GRAJ</div>
      </Link>
    </div>
  );
};

export default Title;
