import React from 'react';
import { CSSProperties } from 'react';
import AppButton from './app-button';
import LearnButton from './learn-button';
import { Stack } from '@mui/material';

function LaunchCard() {
    const root: CSSProperties = {
        backgroundColor: 'white',
        width: '32rem',
        height: '24rem',
        border: '0.15rem solid',
        boxShadow: '0.5rem 0.5rem'
    }

    const title: CSSProperties = {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '4rem',
        color: '#382436',
        margin: '1.5rem 3rem'
    }

    const subtitleRoot: CSSProperties = {
        fontFamily: 'monospace',
        fontSize: '1.25rem',
        color: '#382436',
        margin: '1.5rem 3rem'
    }

    const subtitleBold: CSSProperties = {
        fontWeight: 'bold'
    }

    const buttonsRoot: CSSProperties = {
        padding: '0',
        textAlign: 'center',
    }

    const appButtonRoot: CSSProperties = {
        width: '10rem'
    }

    return (
        <div style={root}>
            <div style={title}>
                Own Your Content
            </div>
            <div style={subtitleRoot}>
                <span style={subtitleBold}>
                    A Bankless, Decentralized, Privacy-First
                </span>
                <span>
                    &nbsp;subscription protocol for creators.
                </span>
            </div>
            <div style={buttonsRoot}>
                <Stack direction='row' spacing={7} justifyContent='center'>
                    <div style={appButtonRoot}>
                        {AppButton()}
                    </div>
                    <div style={appButtonRoot}>
                        {LearnButton("LEARN MORE")}
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default LaunchCard;