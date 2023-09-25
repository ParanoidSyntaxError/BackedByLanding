import React from 'react';
import { CSSProperties } from 'react';

function LearnButton(label: string, onClick: React.MouseEventHandler | undefined = undefined) {
    const root: CSSProperties = {
        textAlign: 'center',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none',
        boxShadow: '0.25rem 0.25rem'
    }

    const text: CSSProperties = {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        border: '0.15rem solid black',
        color: 'black',
        backgroundColor: '#FCB900',
        padding: '0.75rem',
    }

    return (
        <div style={root} onClick={onClick}>
            <div style={text}>
                {label}
            </div>
        </div>
    );
}

export default LearnButton;