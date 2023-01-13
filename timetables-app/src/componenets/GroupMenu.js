import { createAPIEndpoint, ENDPOINTS } from '../api'
import React, { useEffect, useState } from 'react';


export function GroupMenu(props){
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