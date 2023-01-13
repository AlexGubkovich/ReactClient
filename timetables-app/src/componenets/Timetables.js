import React, { useEffect, useState } from 'react';
import { GroupMenu } from './GroupMenu';
import { DaysOfWeakMenu } from './DaysOfWeakMenu';
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

    return (
        <div>
            <DaysOfWeakMenu selectedDay={selectedDay} onSelectDayHandler={selectDayHandler}/>
            <GroupMenu onSelectGroupHandler={selectGroupHandler} />
            {schedule}
            {classes}
        </div>

    )
}

function Schedule(props){
    const lessons = props.lessons;

    let lessonsElements;
    if(lessons !== undefined){
        console.log('lessonsLog');
    }

    // return(
    //     {lessonsElements}
    // )
}

function Classes(props){
    // let classes = props.lessons.map((step, move) => {
    //     if(props.subjects[move] !== undefined){
    //         return (
    //             <div key={move}>
    //                 <p>{step.start} - {step.end} - {props.subjects[move].name}</p>
    //             </div>
    //         )
    //     }
    //     else
    //     {
    //         return (
    //             <div key={move}>
    //                 <p>Нет пары😘</p>
    //             </div>
    //         )
    //     }

    // })
    // return (
    //     <div>
    //         {classes}
    //     </div>
    
    // )
}



