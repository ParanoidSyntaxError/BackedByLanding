import { CSSProperties } from 'react';
import NavigateBar from '../components/navigate-bar';
import Mural from '../components/mural';
import AboutBanner from '../components/about-banner';
import Footer from '../components/footer';

function Home() {
    const root: CSSProperties = {

    }

    return (
        <div style={root}>
            <div>
                <NavigateBar/>
            </div>
            <div>
                <Mural/>
            </div>
            <div>
                <AboutBanner/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;

// Black: #382436
// Green: #00945C
// Yellow: #FCB900