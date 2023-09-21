import React from 'react';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

function AppButton() {
    const root: CSSProperties = {
        textAlign: 'center',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none',
    }

    const text: CSSProperties = {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        border: '0.15rem solid black',
        color: 'white',
        backgroundColor: '#EE2C80',
        padding: '0.75rem',
    }

    const navigate = useNavigate();

    return (
        <div style={root} onClick={() => {navigate('/home')}}>
            <div style={text}>
                LAUNCH APP
            </div>
        </div>
    );
}

export default AppButton;