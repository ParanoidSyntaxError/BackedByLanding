import React from 'react';
import { CSSProperties } from 'react';

function FooterButton(label: string, onClick: React.MouseEventHandler | undefined = undefined) {
    const root: CSSProperties = {
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none'
    }

    const text: CSSProperties = {
        fontFamily: 'monospace',
        fontSize: '1rem',
        color: 'white',
    }

    return (
        <div style={root} onClick={onClick}>
            <div style={text}>
                {label}
            </div>
        </div>
    );
}

export default FooterButton;