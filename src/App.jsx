import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import loadere from '../src/img/loader.png'
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/dashboard/home';
import { useEffect } from 'react';
import Login from './pages/login/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { setnarrow } from '../src/store/login';
import { Errorpage } from './pages/Error/Errorpage';
import Logout from './pages/login/logout'
import Tournasetting from './pages/SettingPage/tournasetting';
import Register from './pages/RegistrationPage/Register';
import Stats from './pages/stats/Stats';
import Tournamentstatpage from './pages/findtournament/tournamentstat/tournamentstatpage';
import Findtournament from './pages/findtournament/findtournament';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // token && dispatch(userdata());
  }, [])

  const log = useSelector((state) => state.login);

  // autocolse sidebar when screensize below 600px
  const sidebarclose = () => {
    const width = window.innerWidth;
    // console.log(width)
    width < 600 ? dispatch(setnarrow(true)) : null;
  }


  return (
    <>
      <ToastContainer closeOnClick={true} pauseOnFocusLoss={true} />
      <div className="App" >
        <Navbar />
        <div className={log.narrow ? "main narrow" : "main"} onClick={sidebarclose}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<Tournasetting />} />
            <Route path="/tournaments" >
              <Route index element={<Findtournament />} />
              <Route path=":tid" element={<Tournamentstatpage />} />
            </Route>
            <Route path="/register/:registerId" element={<Register />} />
            <Route path="/stat/:tid" element={<Stats />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
          <div style={{ display: log.loader ? "flex" : "none" }} className="loader"><img src={loadere} alt="" /></div>
        </div>
        <Sidebar />
      </div >
    </>
  );
}

export default App;
