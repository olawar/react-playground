import React from 'react';

const Square = props =>
    <button className={"square " + props.state + ' ' + props.active} onClick={props.onClick}>
        {props.value}
    </button>

export default Square;