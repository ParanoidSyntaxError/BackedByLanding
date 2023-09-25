import { CSSProperties } from 'react';
import { Stack } from '@mui/material';

function BlogCard(date: string, title: string, author: string) {
    const root: CSSProperties = {
        width: '80vw',
        maxWidth: '48rem',
        border: '0.15rem solid',
        boxShadow: '0.5rem 0.5rem'
    }

    const image: CSSProperties = {
        width: '100%',
        height: '24rem',
        objectFit: 'cover'
    }

    const infoRoot: CSSProperties = {
        margin: '1rem 2rem'
    }

    const dateRoot: CSSProperties = {
        fontFamily: 'monospace',
        fontSize: '1rem',
        color: 'lightgrey',
    }

    const titleRoot: CSSProperties = {
        fontFamily: 'monospace',
        fontSize: '2rem',
        color: '#382436',
        margin: '0.7rem 0'
    }

    const authorRoot: CSSProperties = {
        fontFamily: 'monospace',
        fontSize: '1.25rem',
        color: 'grey',
    }

    return (
        <div style={root}>
            <Stack>
                <img style={image} src='/images/backedby-mural.webp'></img>
                <div style={infoRoot}>
                    <div style={dateRoot}>
                        {date} 
                    </div>
                    <div style={titleRoot}>
                        {title}
                    </div>
                    <div style={authorRoot}>
                        {author}
                    </div>
                </div>                    
            </Stack>
        </div>
    );
}

export default BlogCard;