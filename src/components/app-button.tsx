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
        border: '0.15rem solid',
        boxShadow: '0.25rem 0.25rem',
    }

    const text: CSSProperties = {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '1.25rem',
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