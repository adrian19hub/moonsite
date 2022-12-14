import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ScreensNames } from '../../types/screen.types';

export default function NavBar(props: {
    currScreen: ScreensNames
}) {
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#24baff',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 3px 10px -2px #c4c4c4'
        }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ marginLeft: 1, color: 'white' }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                {props.currScreen}
            </Typography>
            <IconButton>
                <ArrowForwardIosIcon htmlColor='white' />
            </IconButton>
        </div >
    );
}