import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export function Classes(props){
    const classSubjects = props.classSubjects;

    let classElements = [];

    for (let i = 1; i <= classSubjects[classSubjects.length-1].classNumber; i++) {
        if(classes.find(e => e.number === i)){
            classElements.push(<ClassItem key={i} subjectName={classSubjects[i].subjectName} teacherName={classSubjects[i].teacherName}/>);
        }
        else{
            classElements.push(<ThereIsNoClassItem key={i}/>);
        }
    }

    return (
        <Box ml={0} mt={3} sx={{ width: '100%' }}>
            <Stack spacing={1} >
                {classElements}
            </Stack>
        </Box>
    )
}

function ThereIsNoClassItem(){
    return (
        <Box
            sx={{
            display: 'flex',
            '& > :not(style)': {
                mb: 1,
            },
            }}
        >
            <Paper elevation={6} variant="elevation" 
                sx={{padding: 2, textAlign: 'center', borderRadius: '16px', backgroundColor: '#ececec',
                fontWeight: 500, color: '#878f99'
                }}
            >
                Нет пары <span role="img" aria-labelledby="love">🥳</span>
            </Paper>
        </Box>
    )
}

function ClassItem(props){
    const teacherName = props.teacherName;
    const subjectName = props.subjectName 

    return (
        <Box
            sx={{
            display: 'flex',
            '& > :not(style)': {
                mb: 1
            },
            }}
        >
            <Paper elevation={6} variant="elevation" 
                    sx={{padding: 2, textAlign: 'left', borderRadius: '16px', backgroundColor: '#fff',
                }}
            >
                <Box sx={{fontWeight: 500}}>
                    {subjectName}
                </Box>
                
                <br/>

                <Box sx={{color: '#878f99', fontSize: 15}}>
                    {teacherName}
                </Box>
            </Paper>
        </Box>
    )
}

export function ThereIsNoClassesToday(){
    return (
        <Box
            sx={{
            display: 'flex',
            '& > :not(style)': {
                mb: 1,
            },
            }}
        >
            <Paper elevation={6} variant="elevation" 
                sx={{padding: 2, textAlign: 'center', borderRadius: '16px', backgroundColor: '#32de84',
                fontWeight: 500, color: '#fff'
                }}
            >
                Сегодня пар Нет <span role="img" aria-labelledby="love">😪😎🥳</span>
            </Paper>
        </Box>
    )
}