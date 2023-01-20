import { createAPIEndpoint, ENDPOINTS } from '../api'
import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function GroupMenu(props){
    const [groups, setGroups] = useState([]);
    const [value, setValue] = useState('none');

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
            <MenuItem key={step.id} value={step.id}>{step.name}</MenuItem>
        )
    })

    return (
        <FormControl size='small' variant="outlined" focused={false}
            sx={{ m: 2, minWidth: 100, borderRadius: 2}}
        >
            <Select
                id="demo-simple-select-standard"
                onChange={changeSelectedGroup}
                value={value}
            >
                <MenuItem value="none" disabled>
                    Выберите группу
                </MenuItem>
                {options}
            </Select>
        </FormControl>
    )
}