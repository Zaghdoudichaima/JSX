import './App.css';
import Adresse from './Component/Profile/Adresse';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
    <div class="column"><ProfilePhoto/></div> 
    <div class="column">
    <FullName/>
     <Adresse/>
    </div>
    </div> 
  );
}

export default App;
