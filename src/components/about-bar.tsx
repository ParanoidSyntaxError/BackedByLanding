import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { CSSProperties } from 'react';
import WhitepaperButton from './whitepaper-button';
import Stack from '@mui/material/Stack';
import AppButton from './app-button';

function AboutBar() {
    const root: CSSProperties = {
        padding: '4rem 0'
    }

    const aboutRoot: CSSProperties = {
        width: '35rem',
        marginTop: '2rem'
    }

    const title: CSSProperties = {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '3rem',
        color: '#382436',
        marginBottom: '3rem'
    }

    const body: CSSProperties = {
        fontFamily: 'monospace',
        fontSize: '1.25rem',
        color: '#382436',
    }

    const appButtonRoot: CSSProperties = {
        width: '10rem',
        margin: '0 1.5rem',
        marginTop: '2rem',
    }

    const whitepaperButtonRoot: CSSProperties = {
        margin: '0 1.5rem',
        marginTop: '2rem'
    }

    const imageRoot: CSSProperties = {
        textAlign: 'center',   
    }

    const image: CSSProperties = {
        border: '0.15rem solid black',
        width: '35rem',
    }

    return (
        <div style={root}>
            <Grid container justifyContent='center' columnGap={10} rowGap={10}>
                <Grid>
                    <div style={aboutRoot}>
                        <div style={title}>
                            What is BackedBy?
                        </div>
                        <div style={body}>
                            BackedBy is a platform for content creators to take ownership of their content, and connection to their audience.
                            <br/><br/>
                            Creators on BackedBy have total privacy, and custody of their online communities and content, which is achieved by the pseudo anonymity of the blockchain, and the permissionless BackedBy protocol.
                            <br/><br/>
                            No one can get between creators, and their supporters.
                        </div>
                        <Stack direction='row'>
                            <div style={appButtonRoot}>
                                {AppButton()}
                            </div>
                            <div style={whitepaperButtonRoot}>
                                {WhitepaperButton('READ THE WHITEPAPER')}
                            </div>
                        </Stack>
                    </div>
                </Grid>
                <Grid>
                    <div style={imageRoot}>
                        <img style={image} src='images/WhitepaperFrontPage.png'></img>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutBar;