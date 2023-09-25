import React from 'react';
import { CSSProperties } from 'react';

function NavigationButton(label: string, onClick: React.MouseEventHandler | undefined = undefined) {
    const root: CSSProperties = {
        textAlign: 'center',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none'
    }

    const text: CSSProperties = {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: 'white',
        textShadow: '0.1rem 0.1rem black'
    }

    return (
        <div style={root} onClick={onClick}>
            <div style={text}>
                {label}
            </div>
        </div>
    );
}

export default NavigationButton;