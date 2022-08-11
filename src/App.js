import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Greeting from './Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
