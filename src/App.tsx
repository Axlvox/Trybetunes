import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import './index.css';
// import Loading from './pages/Loading';
// const navigate = useNavigate();

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Routes>
      <p>Trybetunes</p>
    </div>
  );
}

export default App;
