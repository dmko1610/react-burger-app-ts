import React from "react";
// @ts-ignore
import classes from './BuildControl.css';

const buildControl = (props: any) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>Less
        </button>
        <button
            className={classes.More}
            onClick={props.added}>More
        </button>
    </div>
);

export default buildControl;
