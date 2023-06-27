import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Layout from './pages/Layout';
import './index.css';
// import Header from './pages/Header';
// import Loading from './pages/Loading';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
        </Route>
      </Routes>
      <p>Trybetunes</p>
    </main>
  );
}

export default App;
