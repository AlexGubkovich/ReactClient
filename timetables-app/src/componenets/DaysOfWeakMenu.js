import { DAYS_OF_WEEK, getWeekDay } from '../helper'
import React, { useEffect, useState } from 'react';

export function DaysOfWeakMenu(props){

    function changeSelectedDay(event){
        props.onSelectDayHandler(parseInt(event.target.value))
    }

    const activeStyle = {
        color: 'red'
    }

    const date = new Date();
    const currentDay = getWeekDay(date);
    let isActiveButton = false;

    useEffect(() => {
        if(isActiveButton === true){
            props.onSelectDayHandler(date.getDay())
        }
    })

    let daysMenu = DAYS_OF_WEEK.map((step,move) => {
        if(move === 0 || move === 6){
            return (
                <div key={move}>
                    <button disabled={true}>
                        {step}
                    </button>
                </div>
            )
        } 
        else {
            let isCurrentDayActive = false;
            if(props.selectedDay === null && step === currentDay){
                isCurrentDayActive = true;
                isActiveButton = true;
            }    

            return (
                <div key={move}>
                    <button value={move} style={props.selectedDay === move || isCurrentDayActive
                        ? activeStyle : null} onClick={changeSelectedDay}>
                        {step}
                    </button>
                </div>
            )
        }
    })
    daysMenu.push(daysMenu[0])
    daysMenu = daysMenu.filter((num, index) => index !== 0)

    return (
        <div>
            {daysMenu}
        </div>
    )
}
