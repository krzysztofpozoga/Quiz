import { ReactNode } from "react";

import classes from './Layout.module.css';

interface Props {
    children: ReactNode,
}

const Layout = (props: Props) => {
    return <div className={classes.main}>{props.children}</div>

};

export default Layout;