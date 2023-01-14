import React, { useEffect, useState } from 'react';
import { GroupMenu } from './GroupMenu';
import { DaysOfWeakMenu } from './DaysOfWeakMenu';
import { Schedule } from './Schedule';
import { Classes } from './Classes'
import { createAPIEndpoint, ENDPOINTS } from '../api';

export function Timetables(){
    
    const [selectedGroup, setGroup] = useState(null);
    const [selectedDay, setDay] = useState(null);
    const [callSchelule, setCallSchelule] = useState(null);
    const [timetables, setTimetables] = useState(null);

    const selectGroupHandler = group => setGroup(group);
    const selectDayHandler = day => setDay(day);

    useEffect(() => {
        if(callSchelule === null){
            createAPIEndpoint(ENDPOINTS.getCallSchedule)
                .fetch()
                .then(res => {
                    setCallSchelule(res.data)
                })
                .catch(err => { console.log(err); })
        }

        if(selectedGroup !== null && selectedGroup !== 'Выберите группу'){
            createAPIEndpoint(ENDPOINTS.getTimetables)
                .fetchById(selectedGroup)
                .then(res => {
                    setTimetables(res.data)
                })
                .catch(err => { console.log(err); })
        }
    },[selectedGroup])

    let schedule = null;
    if(callSchelule !== null){
        schedule = <Schedule lessons={callSchelule.lessons}/>
    }
    // else{
    //     schedule = <h4>расписания нет</h4>;
    // }

    let classes;
    if(timetables !== null){
        let timetable = timetables.find(e => e.date === selectedDay)
        if(timetable !== undefined){
            classes = <Classes subjects={timetable.subjects} classes={timetable.classes}/>
        }
        else {
            classes = <h4>Сегодня пар Нет</h4>;
        }
    }

    const style = {
        display: 'inline-flex',
        margin: '30px'
    }

    return (
        <div>
            <div style={style}>
                <DaysOfWeakMenu selectedDay={selectedDay} onSelectDayHandler={selectDayHandler}/>
                <GroupMenu onSelectGroupHandler={selectGroupHandler} />
            </div>
            <div>
                <span style={style}>
                    {schedule}        
                </span>
                <span style={style}>
                    {classes}        
                </span>
            </div>
        </div>

    )
}