import React from 'react';
import { CSSProperties } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import NavigationButton from './navigation-button';
import AppButton from './app-button';
import { useNavigate } from 'react-router-dom';

function NavigateBar() {
    const root: CSSProperties = {
        height: '4.5rem',
        backgroundColor: '#FCB900',
        position: 'relative',
        zIndex: '10',
        borderBottom: '0.15rem solid black'
    }

    const logoRoot: CSSProperties = {
    }

    const logo: CSSProperties = {
        height: '60%',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        margin: '0 2.25rem'
    }

    const menuRoot: CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        margin: '0 1rem',
        right: '0%',
    }

    const navigateButtonRoot: CSSProperties = {
        margin: 'auto 1.5rem',
        position: 'relative',
        top: '25%',
    }

    const appButtonRoot: CSSProperties = {
        margin: 'auto 1.5rem',
    }

    const navigate = useNavigate();

    return (
        <div style={root}>
            <div style={logoRoot}>
                <img style={logo} src='images/lockup_horizontal_white.svg'></img>
            </div>
            <div style={menuRoot}>
                <Grid container>
                    <Grid>
                        <div style={navigateButtonRoot}>
                            {NavigationButton('HOME', () => {navigate('/')})}
                        </div>
                    </Grid>
                    <Grid>
                        <div style={navigateButtonRoot}>
                            {NavigationButton('BLOG', () => {navigate('/blog')})}
                        </div>
                    </Grid>
                    <Grid>
                        <div style={navigateButtonRoot}>
                            {NavigationButton('DOCS', () => {navigate('/')})}
                        </div>
                    </Grid>
                    <Grid>
                        <div style={navigateButtonRoot}>
                            {NavigationButton('WHITE PAPER', () => {window.open('/BackedByWhitepaper.pdf')})}
                        </div>
                    </Grid>
                    <Grid>
                        <div style={appButtonRoot}>
                            {AppButton()}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default NavigateBar;