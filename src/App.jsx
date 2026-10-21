import './App.css'
import HelloWorld from "./HelloWorld.jsx";
import SimpleHomePage from './SimpleHomePage.jsx';
import Credits from './Credits.jsx';
import Countclicking from "./countclicking.jsx";

function App() {
    return (
        <div>
            <Credits />
            <SimpleHomePage />
            <Credits />
            <Countclicking />
        </div>
    );
}

export default App;