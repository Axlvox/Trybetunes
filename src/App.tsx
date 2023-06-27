import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Header from './pages/Header';
import Layout from './pages/Layout';
import './index.css';
// import Loading from './pages/Loading';
// const navigate = useNavigate();

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
        </Route>
      </Routes>
      <p>Trybetunes</p>
    </div>
  );
}

export default App;
