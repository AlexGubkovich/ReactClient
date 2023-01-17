import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import telegram_icon from '../assets/img/telegram.svg';

export function Footer(){
    return (
        <Box sx={{
            '--Grid-borderWidth': '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            margin: '100px 30px 0px',
            textAlign: 'center',
            color: 'text.secondary',
            backgroundColor: "#fff"
          }}>
            <footer>
                <Box my={2} sx={{color: 'text.secondary', fontSize: 18 }}>
                    Сайт с расписанием занятий для студентов
                </Box>
                <Box sx={{}}>
                    Контакты для обратной связи
                </Box>
                <Box my={2}>
                    <Link href="https://t.me/AlexGubkovich" underline="none" rel="noopener noreferrer" target="_blank">
                        <img height={'30px'} src={telegram_icon} alt="telegram_link"/>
                    </Link>
                </Box>
            </footer>
        </Box>
    )
}