import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News.js";
import Home from './pages/Home.js';
import Table from './pages/Table.js';
import Schedule from './pages/Schedule.js';
import Player from './pages/Player-Staff';
import Partners from './pages/Partners.js';
import History from './pages/History.js';
import Result from './pages/Result.js';
import Shop from './pages/Shop.js';
import NewsDetail from "./pages/NewsDetail.js";
import PlayerDetail from "./pages/PlayerDetail";


function App() {
  return (
    <Router>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail/>}/>
        <Route path="/table" element={<Table />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/player-staff" element={<Player />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/history" element={<History />} />
        <Route path="/result-match" element={<Result />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/players/:id" element={<PlayerDetail />} />
      
      </Routes>
    </Router>

    
    
  );
}

export default App;
