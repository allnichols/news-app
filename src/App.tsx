import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './views/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} >
            <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
