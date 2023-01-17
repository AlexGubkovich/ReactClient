import { getFormatedDate } from '../helper'
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import hashtag from '../assets/img/hashtag.svg'

export function Header(){
    return (
      <Box sx={{
        '--Grid-borderWidth': '1px',
        borderBottom: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        margin: '0 30px',
        color: 'text.primary'
      }}>
        <header className="App-header">
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <img src={hashtag} height='30px' alt="description" />
            <Typography sx={{fontSize: 'calc(13px + 2vmin)', fontWeight: 500 }} mx={2}>AlxeGubkovich</Typography>
          </Box>
          <span>{getFormatedDate(new Date())}</span>
        </header>
      </Box>
    )
  }