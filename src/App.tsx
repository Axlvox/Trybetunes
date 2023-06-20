import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
// import Loading from './pages/Loading';
// const navigate = useNavigate();
import Search from './pages/Search';
import Album from './pages/Album';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        {/* <Route path="/Loading" element={ <Loading /> } /> */}
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Routes>
      <p>Trybetunes</p>
    </div>
  );
}

export default App;
