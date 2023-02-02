import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; 
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


import { GroupMenu } from './GroupMenu';
import { DaysOfWeakMenu } from './DaysOfWeakMenu';
import { Schedule } from './Schedule';
import { Classes, ThereIsNoClassesToday } from './Classes'
import { createAPIEndpoint, ENDPOINTS } from '../api';


export function Timetables(){
    
    const [selectedGroup, setGroup] = useState(null);
    const [selectedDay, setDay] = useState(null);
    const [Schelule, setSchelule] = useState(null);
    const [timetables, setTimetables] = useState(null);

    const selectGroupHandler = group => setGroup(group);
    const selectDayHandler = day => setDay(day);

    useEffect(() => {
        if(Schelule === null){
            createAPIEndpoint(ENDPOINTS.getSchedule)
                .fetch()
                .then(res => {
                    setSchelule(res.data)
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
    if(Schelule !== null){
        schedule = <Schedule lessons={Schelule.lessons}/>
    }
    else{
        schedule = (
            <Stack spacing={1} sx={{alignItems: 'center'}}>
                <Skeleton variant="circular" width={22} height={22} />
                <Skeleton variant="rounded" width={3} height={60} />
                <Skeleton variant="circular" width={22} height={22} />
                <Skeleton variant="rounded" width={3} height={60} />
                <Skeleton variant="circular" width={22} height={22} />
                <Skeleton variant="rounded" width={3} height={60} />
                <Skeleton variant="circular" width={22} height={22} />
                <Skeleton variant="rounded" width={3} height={60} />
                <Skeleton variant="circular" width={22} height={22} />
            </Stack>
        ) 
    }

    let classes;
    if(timetables !== null){
        let timetable = timetables.find(e => e.date === selectedDay)
        if(timetable !== undefined){
            classes = <Classes classSubjects={timetable.classSubjects}/>
        }
        else {
            classes = <ThereIsNoClassesToday/>;
        }
    }

    return (
        <Grid container mt={1} spacing={1}>
            <Grid xs={12} container sx={{ justifyContent: 'center' }}>
                <Grid>
                    <DaysOfWeakMenu onSelectDayHandler={selectDayHandler}/>
                </Grid>
                <Grid>
                    <GroupMenu onSelectGroupHandler={selectGroupHandler} />
                </Grid>
            </Grid>
            <Grid xs={12} container spacing={3} sx={{ justifyContent: 'start', flexWrap: 'nowrap' }}>
                <Grid xs={4}>
                    {schedule}        
                </Grid>
                <Grid xs={8}>
                    {classes}
                </Grid>
            </Grid>
        </Grid>
    )
}