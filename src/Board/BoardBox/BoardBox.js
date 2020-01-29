import React from 'react';
import '../BoardBox/BoardBox.scss';
import '../Cross/Cross.scss';
import Cross from '../Cross/Cross';
import Circle from '../Circle/Circle';

const boardBox = (props) => {
    let figureToShow = null;
    if(props.boxValue === 1) {
        figureToShow = <Cross></Cross>
    } else if(props.boxValue===0){
        figureToShow = <Circle></Circle>
    }
    return (
        <div onClick={props.click} className="board-box">
            {figureToShow}
        </div>
    );
}

export default boardBox;