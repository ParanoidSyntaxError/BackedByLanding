import { CSSProperties } from 'react';
import NavigateBar from '../components/navigate-bar';
import MuralBar from '../components/mural-bar';
import AboutBar from '../components/about-bar';
import FaqBar from '../components/faq-bar';
import LinksBar from '../components/links-bar';

function Home() {
    const root: CSSProperties = {

    }

    return (
        <div style={root}>
            <div>
                <NavigateBar/>
            </div>
            <div>
                <MuralBar/>
            </div>
            <div>
                <AboutBar/>
            </div>
            <div>
                <FaqBar/>
            </div>
            <div>
                <LinksBar/>
            </div>
        </div>
    );
}

export default Home;

// Black: #382436
// Green: #00945C
// Yellow: #FCB900