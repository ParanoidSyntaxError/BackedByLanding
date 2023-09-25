import React from 'react';
import { CSSProperties } from 'react';
import FaqAccordions from './faq-accordions';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

function FaqBar() {
    const root: CSSProperties = {
        fontFamily: 'monospace',
        margin: 'auto 0',
        backgroundColor: '#00945C',
        padding: '4rem 0'
    }

    const textRoot: CSSProperties = {
        width: '35rem',
        marginTop: '2rem'
    }

    const title: CSSProperties = {
        fontWeight: 'bold',
        fontSize: '3rem',
        color: 'white',
    }

    const subtitle: CSSProperties = {
        fontSize: '1.15rem',
        color: 'white',
        marginTop: '2rem',
        width: '75%'
    }

    const accordiansRoot: CSSProperties = {
        width: '35rem',
    }

    return (
        <div style={root}>
            <Grid container justifyContent='center' columnGap={2}>
                <Grid>
                    <div style={textRoot}>
                        <div style={title}>
                            Frequently Asked Questions
                        </div>
                        <div style={subtitle}>
                            Web3 can be confusing, but the benefits are enormous
                        </div>
                    </div>
                </Grid>
                <Grid>
                    <div style={accordiansRoot}>
                        {FaqAccordions()}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default FaqBar;