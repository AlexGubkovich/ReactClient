import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; 

import radio_filled from '../assets/img/radio_filled.svg';
import radio from '../assets/img/radio.svg';

export function Schedule(props){
    let lessonsElements;
    const lessons = props.lessons;

    let currentTime = new Date();
    let currentLesson = 0;

    for (let i = 0; i < lessons.length; i++) {
      let splittedLessonTime = lessons[i].end.split(':')
      let lessonsEndTime = new Date();
      lessonsEndTime.setHours(splittedLessonTime[0]);
      lessonsEndTime.setMinutes(splittedLessonTime[1])

      if(currentTime > lessonsEndTime){
        continue;
      } else{
        currentLesson = i;
        break;
      }
    }

    if(lessons !== undefined){
        lessonsElements = lessons.map((step,move) => {
          let active = move === currentLesson ? true : false;
            return (
                  <Box key={move} sx={{ textAlign: 'center' }}>
                      <Grid container spacing={0}  sx={{ flexDirection: 'row', padding: '0px', flexWrap: 'nowrap', justifyContent: 'flex-end' }}>

                        <Grid>
                          <Box sx={{ color: 'text.primary', fontWeight: 'bold', fontSize: 'h6.fontSize' }}>
                            {step.start.split(':')[0]}:{step.start.split(':')[1]}
                          </Box>
                          <Box sx={{ color: 'text.secondary' }}>
                            {step.end.split(':')[0]}:{step.end.split(':')[1]}
                          </Box>
                        </Grid>

                        <Grid ml={1}>
                          <Box className="timeline">
                            <img src={ active ? radio_filled : radio } alt="radio filled" />
                            <hr className="timeline__line" style={{ height: `${active ? 80 : 50}px` }}/>
                            {move === lessons.length-1 ?
                              <img src={radio} alt="radio filled" /> 
                              : null
                            }
                          </Box>
                        </Grid>
                      </Grid>
                  </Box>
            )
        });
    }

    return(
        <div>
            {lessonsElements}
        </div>
    )
}



