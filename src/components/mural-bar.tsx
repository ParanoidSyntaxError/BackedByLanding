import React from 'react';
import { CSSProperties } from 'react';
import LaunchCard from './launch-card';

function MuralBar() {
    const root: CSSProperties = {
        margin: '0',
        padding: '0',
        height: '70vh',
        backgroundImage: 'url(images/backedby-mural.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    const bannerRoot: CSSProperties = {
        paddingTop: '15vh',
        paddingLeft: '15vw'
    }

    return (
        <div style={root}>
            <div style={bannerRoot}>
                {LaunchCard()}
            </div>
        </div>
    );
}

export default MuralBar;