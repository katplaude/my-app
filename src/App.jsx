import './App.css'
import FirstPage from "./FirstPage/FirstPage.jsx";
import logo from './assets/logo.png';
import Mika from "./Mika/Mika.jsx";
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
            </Switch>
            <img className="logo" src={logo} alt="Logo" />
        </div>
    );
}

export default App
