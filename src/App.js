import './App.css';
import Navbar from './components/Navbar'
import ActivityContainer from './components/ActivityContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Main page</h1>
      <ActivityContainer />
    </div>
  );
}

export default App;
