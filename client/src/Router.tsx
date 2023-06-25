import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/views/Home';
import MyPage from './pages/MyPage/views/MyPage';
import Board from './pages/Board/views/Board';
import Login from './pages/Login/views/Login';
import Ask from './pages/Ask/views/Ask';
import SignUp from './pages/SignUp/views/SignUp';
import Detail from './pages/Detail/views/Detail';
import Edit from './pages/Edit/views/Edit';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { RootState } from './common/store/RootStore';

function Router() {
  const [isLogin, setIsLogin] = useState(false);

  const user = useSelector((state: RootState) => state.userInfo.memberId);
  console.log(user);
  useEffect(() => {
    if (user !== 0) setIsLogin(true);
    else setIsLogin(false);
    console.log(isLogin);
  }, [user]);
  if (isLogin)
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage/:id/:name/:tab" element={<MyPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/ask/:id/:name" element={<Ask />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
        {/* /login,signup으로의 접근 시 /로 리다이렉션 */}
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/signup" element={<Navigate to="/" replace />} />
      </Routes>
    );
  else
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    );
}

export default Router;
