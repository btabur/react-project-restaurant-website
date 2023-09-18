
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
