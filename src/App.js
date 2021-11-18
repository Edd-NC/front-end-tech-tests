import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Test1 from './components/Test1';

function App() {
  return (
    <section className="App">
       <Routes>
          <Route exact path="" element={Home} />
          <Route exact path="/test/:num" element={Test1} />
       </Routes>
    </section>
  );
}

export default App;
