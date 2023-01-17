import { DAYS_OF_WEEK } from '../helper'
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { twitterTabsStylesHook } from '@mui-treasury/styles/tabs';


export function DaysOfWeakMenu(props){
    const [selectedDay, setValue] = React.useState(1);
    const [isDaySelected, setIsDaySelected] = React.useState(false);

    const tabsStyles = twitterTabsStylesHook.useTabs();
    const tabItemStyles = twitterTabsStylesHook.useTabItem();

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
                <Tab key={move} disabled value={move} classes={tabItemStyles} label={step} />
            )
        } 
        else {   
            return (
                <Tab classes={tabItemStyles} key={move} value={move} label={step} />
            )
        }
    })
    daysMenu.push(daysMenu[0])
    daysMenu = daysMenu.filter((num, index) => index !== 0)

    return (
        <Box sx={{ width: 'auto' }}>
            <Tabs
                classes={tabsStyles}
                value={selectedDay}
                onChange={changeSelectedDay}
                variant='scrollable'
                scrollButtons='on'
            >
                {daysMenu}
            </Tabs>
        </Box>
    )
}