import './App.css'
import HelloWorld from "./HelloWorld.jsx";
import SimpleHomePage from './SimpleHomePage.jsx';
import Credits from './Credits.jsx';

function App() {
    return (
        <div>
            <Credits />
            <SimpleHomePage />
            <Credits />
        </div>
    );
}

export default App;