import { DAYS_OF_WEEK, getWeekDay } from '../helper'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import React, { useEffect, useState } from 'react';

export function Timetables(){
    
    const [selectedGroup, setGroup] = useState(null);
    const [selectedDay, setDay] = useState(null);

    const selectGroupHandler = group => setGroup(group);
    const selectDayHandler = day => setDay(day);

    useEffect(() => {
        if(selectedGroup === null){
            return
        }
        console.log('group = ' + selectedGroup)
        console.log('day = ' + selectedDay)
    })

    return (
        <div>
            <DaysOfWeakMenu selectedDay={selectedDay} onSelectDayHandler={selectDayHandler}/>
            <GroupMenu onSelectGroupHandler={selectGroupHandler} />
        </div>

    )
}

function DaysOfWeakMenu(props){

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



function GroupMenu(props){
    const [groups, setGroups] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.getGroups)
            .fetch()
            .then(res => {
                setGroups(res.data)
            })
            .catch(err => { console.log(err); })
    }, [])

    function changeSelectedGroup(event){
        setValue(event.target.value)
        props.onSelectGroupHandler(event.target.value)
    }

    let options = groups.map((step) => {
        return (
            <option key={step.id} value={step.id}>{step.name}</option>
        )
    })

    return (
        <select value={value} onChange={changeSelectedGroup}>
            <option>Выберите группу</option>
            {options}
        </select>
    )
}