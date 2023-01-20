import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; 
import Box from '@mui/material/Box';

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

    return (
        <Grid container spacing={1}>
            <Grid xs={12} container sx={{ justifyContent: 'center' }}>
                <Grid>
                    <DaysOfWeakMenu onSelectDayHandler={selectDayHandler}/>
                </Grid>
                <Grid>
                    <GroupMenu onSelectGroupHandler={selectGroupHandler} />
                </Grid>
            </Grid>
            <Grid xs={12} container sx={{ justifyContent: 'center' }}>
                <Grid>
                    {schedule}        
                </Grid>
                <Grid>
                    {classes}
                </Grid>
            </Grid>
        </Grid>
    )
}