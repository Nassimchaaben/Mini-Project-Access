import './App.css';
import './Components/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Status from './Components/Status';


function App() {
  return (
    <div className="main">
        <div>
        <h5>Hello admin.</h5>
        <h5>View the status of your agents and the evolution of their latest alerts</h5>
        <div className='text'>
          <h2>Installed agents by their status</h2>
        </div>
      </div>
      <Status/>
    </div>
  );
}

export default App;
