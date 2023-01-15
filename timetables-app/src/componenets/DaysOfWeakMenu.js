import { DAYS_OF_WEEK } from '../helper'
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';


export function DaysOfWeakMenu(props){
    const [selectedDay, setValue] = React.useState(1);
    const [isDaySelected, setIsDaySelected] = React.useState(false);

    const date = new Date();
    const currentDay = date.getDay();

    useEffect(() => {
        if(currentDay !== 0 && currentDay !== 6 && isDaySelected !== true){
            changeSelectedDay(null, currentDay)
            setIsDaySelected(true);
        }
        else if(!isDaySelected){
            changeSelectedDay(null, 1)
            setIsDaySelected(true);
        }
    })

    function changeSelectedDay(event, newValue){
        props.onSelectDayHandler(newValue)
        setValue(parseInt(newValue));
    }

    let daysMenu = DAYS_OF_WEEK.map((step,move) => {
        const label = <span>{step}<br/>number</span>;
        if(move === 0 || move === 6){
            return (
                <Tab key={move} disabled value={move} label={label} />
            )
        } 
        else {   
            return (
                <Tab key={move} value={move} label={label} />
            )
        }
    })
    daysMenu.push(daysMenu[0])
    daysMenu = daysMenu.filter((num, index) => index !== 0)

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={selectedDay}
                onChange={changeSelectedDay}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                {daysMenu}
            </Tabs>
        </Box>
    )
}
