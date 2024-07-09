import './App.css'
import FirstPage from "./FirstPage/FirstPage.jsx";
import logo from './assets/logo.png';
import Mika from "./Mika/Mika.jsx";
import Juki from "./Juki/Juki.jsx";
// import Robin from "./Robin/Robin.jsx";
// import Niki from "./Niki/Niki.jsx";
import Choose from "./Choose/Choose.jsx"
import { Route, Switch, useLocation } from "wouter";

function App() {
    const [location, setLocation] = useLocation();

    const handleScreenTap = () => {
        if (location === '/first') {
            setLocation('/mika');
        }
    };

    return (
        <div className='app' onClick={handleScreenTap} style={{ width: '67.5rem', height: '120rem' }}>
            <Switch>
                <Route path="/first">
                    <FirstPage />
                </Route>
                <Route path="/mika">
                    <Mika />
                </Route>
                <Route path="/choose">
                    <Choose />
                </Route>
                <Route path="/juki">
                    <Juki />
                </Route>
                {/*<Route path="/robin">*/}
                {/*    <Robin />*/}
                {/*</Route>*/}
                {/*<Route path="/niki">*/}
                {/*    <Niki />*/}
                {/*</Route>*/}
            </Switch>
            <img className="logo" src={logo} alt="Logo" />

        </div>

    );
}

export default App
