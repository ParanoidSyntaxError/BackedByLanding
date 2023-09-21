import React from 'react';
import { CSSProperties } from 'react';
import LaunchBanner from './launch-banner';

function Mural() {
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
                {LaunchBanner()}
            </div>
        </div>
    );
}

export default Mural;