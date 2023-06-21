import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/views/Home';
import MyPage from './pages/MyPage/views/MyPage';
import Board from './pages/Board/views/Board';
import Login from './pages/Login/views/Login';
import Ask from './pages/Ask/views/Ask';
import SignUp from './pages/SignUp/views/SignUp';
import Detail from './pages/Detail/views/Detail';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage/:id/:name" element={<MyPage />} />
      <Route path="/board" element={<Board />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ask/:id/:name" element={<Ask />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default Router;
