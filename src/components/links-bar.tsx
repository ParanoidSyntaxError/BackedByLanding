import React from 'react';
import { CSSProperties } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import LinksButton from './links-button';

function LinksBar() {
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
                        {LinksButton('Documentation', () => {window.open('https://docs.backed.by')})}
                    </div>
                    <div style={button}>
                        {LinksButton('GitHub', () => {window.open('https://github.com/backedby')})}
                    </div>
                </Grid>
                <Grid>
                    <div style={title}>
                        Social
                    </div>
                    <div style={button}>
                        {LinksButton('Twitter', () => {window.open('https://twitter.com/backedbyapp')})}
                    </div>
                    <div style={button}>
                        {LinksButton('Discord', () => {window.open('https://discord.com/invite/XG4VBZyxCr')})}
                    </div>
                    <div style={button}>
                        {LinksButton('LinkedIn')}
                    </div>
                </Grid>
                <Grid>
                    <div style={title}>
                        Resources
                    </div>
                    <div style={button}>
                        {LinksButton('White Paper', () => {window.open('/BackedByWhitepaper.pdf')})}
                    </div>
                    <div style={button}>
                        {LinksButton('Audits', () => {window.open('https://skynet.certik.com/projects/backedby')})}
                    </div>
                </Grid>
            </Grid>
            <div style={logoRoot}>
                <img style={logo} src='images/lockup_horizontal_white.svg'></img>
            </div>
        </div>
    );
}

export default LinksBar;