import { CSSProperties } from 'react';
import NavigateBar from '../components/navigate-bar';

function Blog() {
    const root: CSSProperties = {

    }

    return (
        <div style={root}>
            <div>
                <NavigateBar/>
            </div>
        </div>
    );
}

export default Blog;