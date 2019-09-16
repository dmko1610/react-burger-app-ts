import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
// @ts-ignore
import classes from './Layout.css';

const layout = (props: any) => (
    <Auxiliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;
