import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function Classes(props){
    const classes = props.classes;
    const subjects = props.subjects;
    let classElements = [];

    let numberSubject = 0;
    for (let i = 1; i <= classes[classes.length-1].number; i++) {
        if(classes.find(e => e.number === i)){
            let currentSubject = subjects[numberSubject];
            classElements.push(<Item key={i}>{currentSubject.name} - {currentSubject.teacher.fullName}</Item>);
            numberSubject++;
        }
        else{
            classElements.push(<Item key={i}>Нет пары <span role="img" aria-labelledby="love">❤️😘🥳</span></Item>);
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={3}>
                {classElements}
            </Stack>
        </Box>
    )
}