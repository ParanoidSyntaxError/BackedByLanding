import React from 'react';
import { CSSProperties } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/material';
import NavigationButton from './navigation-button';
import AppButton from './app-button';
import { useNavigate } from 'react-router-dom';
import FooterButton from './footer-button';

function Footer() {
    const root: CSSProperties = {
        padding: '1.5rem 0',
        backgroundColor: '#382436',
        zIndex: '10',
        fontFamily: 'monospace',
    } 

    const title: CSSProperties = {
        fontSize: '1.75rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1rem'
    }

    const button: CSSProperties = {
        marginBottom: '0.75rem'
    }

    const logoRoot: CSSProperties = {
        height: '4vh',
        width: '',
        marginTop: '2rem'
    }

    const logo: CSSProperties = {
        width: '100%',
        height: '100%'
    }

    const navigate = useNavigate();

    return (
        <div style={root}>
            <Grid container columnGap={14} justifyContent='center'>
                <Grid>
                    <div style={title}>
                        Developers
                    </div>
                    <div style={button}>
                        {FooterButton('Documentation')}
                    </div>
                    <div style={button}>
                        {FooterButton('GitHub')}
                    </div>
                </Grid>
                <Grid>
                    <div style={title}>
                        Social
                    </div>
                    <div style={button}>
                        {FooterButton('Twitter')}
                    </div>
                    <div style={button}>
                        {FooterButton('Discord')}
                    </div>
                    <div style={button}>
                        {FooterButton('LinkedIn')}
                    </div>
                </Grid>
                <Grid>
                    <div style={title}>
                        Resources
                    </div>
                    <div style={button}>
                        {FooterButton('White Paper')}
                    </div>
                    <div style={button}>
                        {FooterButton('Audits')}
                    </div>
                </Grid>
            </Grid>
            <div style={logoRoot}>
                <img style={logo} src='images/lockup_horizontal_white.svg'></img>
            </div>
        </div>
    );
}

export default Footer;