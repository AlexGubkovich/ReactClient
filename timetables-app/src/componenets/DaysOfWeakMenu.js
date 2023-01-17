import { DAYS_OF_WEEK } from '../helper'
import React, { useEffect } from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


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

    let daysMenu = DAYS_OF_WEEK.map((step, move) => {
        if(move === 0 || move === 6){
            return (
                <Tab key={move} disabled value={move}  label={step} />
            )
        } 
        else {   
            return (
                <Tab key={move} value={move} label={step} />
            )
        }
    })
    daysMenu.push(daysMenu[0])
    daysMenu = daysMenu.filter((num, index) => index !== 0)

    return (
        <Box sx={{ width: 'auto' }}>
            <Tabs
                value={selectedDay}
                onChange={changeSelectedDay}

                variant="scrollable"
                scrollButtons="auto"

                textColor="secondary"
                indicatorColor="secondary"

                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      '&.Mui-disabled': { opacity: 0.3 },
                    }
                  }}
            >
                {daysMenu}
            </Tabs>
        </Box>
    )
}