import { useEffect, useState, useMemo } from 'react';
import './channeldashboard.css';
import { useParams } from 'react-router-dom';
import { MdMenuOpen, MdContentCopy } from "react-icons/md";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setloader } from '../../store/login';
import { SlUserFollow } from "react-icons/sl";
import { SlUserFollowing } from "react-icons/sl";
import { toast } from 'react-toastify';
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MdInsertLink } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbTournament } from "react-icons/tb";
import { IoMdRefresh } from "react-icons/io";
import LoadingButton from '@mui/lab/LoadingButton';
import logo from '../../assets/logopng250.webp'
import { useSelector } from 'react-redux';

const Channeldashboard = () => {
  const dispatch = useDispatch();
  const { uid } = useParams();
  const log = useSelector((state) => state.login);

  const [pro, setPro] = useState(null);
  const [tournas, settournas] = useState(null);
  const [error, setError] = useState(null);
  const [isfollowing, setisfollowing] = useState(false);


  useEffect(() => {
    dispatch(setloader(true)); // Set loader when component mounts
    fetchData();
  }, [log.islogin]);


  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const url = log.islogin ? `${import.meta.env.VITE_API_ADDRESS}loginchannel` : `${import.meta.env.VITE_API_ADDRESS}channel`;
    const headers = {
      "Content-Type": "application/json",
      ...(log.islogin && { "Authorization": `Bearer ${token}` })
    };
    const body = JSON.stringify({ uid: uid.split('@')[1] });

    try {
      const response = await fetch(url, { method: 'POST', headers, body });
      const result = await response.json();
      dispatch(setloader(false));

      if (!response.ok) {
        setError(result.message);
        toast.warn(result.message, { autoClose: 1900 });
        return;
      }

      setPro(result.data);
      settournas(result.tournaments);
      if (log.islogin) {
        setisfollowing(result.isfollowed);
      }
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Something went wrong, please try again.');
      dispatch(setloader(false));
    }
  };

  const dofollow = async (flag) => {
    console.log(flag)
    const token = localStorage.getItem("token");
    if (!token) {
      return toast.warn('You are not Logged In', { autoClose: 1900 });
    }
    const channeluserid = pro._id;
    try {
      const rese = await fetch(`${import.meta.env.VITE_API_ADDRESS}follow`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ flag, channeluserid })
      });
      const result = await rese.json();
      console.log(result)

      if (!rese.ok) {
        toast.warn(result.message, { autoClose: 1900 });
        return;
      }
      toast.success(result.message, { autoClose: 1500 });
      fetchData();
      setError(null);  // Clear error if fetch is successful
    } catch (error) {
      console.error(error);
      toast.error(error.message, { autoClose: 1900 });
    }
  };

  function copyfunc(text) {
    navigator.clipboard.writeText(text)
      .then(() => toast.success('Copied', { autoClose: 1000 }))
      .catch(err => toast.error('Failed to copy', { autoClose: 1000 }));
  }

  const socialIcons = useMemo(() => ({
    youtube: <FaYoutube />,
    facebook: <CiFacebook />,
    whatsapp: <FaWhatsapp />,
    instagram: <FaInstagram />,
  }), []);

  if (error) {
    return (
      <div className='channeldashboard'>
        <h2>Oops, {error}</h2>
      </div>
    );
  }
  if (!pro) {
    return;  // Show loader until profile data is set
  }

  return (
    <div className='channeldashboard'>
      <div className="profile">
        <div className="upperinfo">
          <div className="coverimage">
            <img src="https://firebasestorage.googleapis.com/v0/b/esportswebin.appspot.com/o/users%2FOyGza3wnnfT082g2YsrO1ag2umK2%2Fcover.webp?alt=media&token=10828b44-1acb-4a36-bdec-d7ac4e24a67d" alt="cover image" />
          </div>

          <div className="maininfo">
            <div className="top">
              <div className="profileimage">
                <img src="https://firebasestorage.googleapis.com/v0/b/esportswebin.appspot.com/o/users%2FOyGza3wnnfT082g2YsrO1ag2umK2%2Fphoto.webp?alt=media&token=18e2c5f4-0182-4ac8-ab5e-d7c25dc00835" alt="profile image" />
                <div className='names'>
                  <h2>{pro.name}</h2>
                  <span>{uid}</span>
                </div>
              </div>
              <div className="tournament infoo">
                <div><TbTournament/> Tournament</div>
                <p>{tournas.length}</p>
                <i>(Private included)</i>
              </div>
              <div className="followers infoo">
                <div><FaPeopleGroup/> Followers</div>
                <p>{pro.followers.length || 0}</p>
              </div>
              <div>
                {isfollowing ?
                  <Button title='Unfollow' onClick={() => dofollow(false)} style={{fontWeight:700, background: '#DFE3E8', color: '#212B36' }} variant="contained" startIcon={<SlUserFollowing />}>
                    Following
                  </Button> :
                  <Button title='Follow' onClick={() => dofollow(true)} variant="contained" startIcon={<SlUserFollow />}>
                    Follow
                  </Button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='more'>
        <div className="about">
          <h2>About</h2>
          <p style={{ marginBottom: '12px' }}> {pro.bio}</p>
          <div> <MdLocalPhone /> {pro.publicphone}</div>
          <div> <IoIosMail /> {pro.publicemail}</div>
        </div>
        <div className="socallink">
          <h2>Social Links</h2>
          {pro.sociallinks?.map((val, ind) => (
            <div key={ind}>
              <span className="icon">{socialIcons[val.name]}</span>
              <span>{val.link}</span>
              <MdContentCopy className='copyicon' title='Copy Link' onClick={() => copyfunc(val.link)} />
            </div>
          ))}
        </div>
      </div>

      <div className="tournamentss">
        {tournas && tournas.map((tourn, ind) => {
          const formattedDate = new Date(tourn.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });

          const formattedTime = new Date(tourn.createdAt).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });

          return <div className="card" key={ind}>
            <div className="img">
              <img
                loading="lazy"
                src={tourn.tournment_logo || logo}
                alt="logo"
              />
              <span title={tourn.title}>{tourn.title}</span>
            </div>
            <h3 className="organiser">- {tourn.organiser}</h3>
            <div className="time">
              {formattedDate}, {formattedTime} <span>{tourn.type}</span>
            </div>
            <div className="tournId">
              ID :- {tourn.tournid}
              <MdContentCopy title="Copy Id" onClick={() => copyfunc(tourn.tournid)}  />
            </div>
            <div className="controller">
              <Button size="small" variant="contained" endIcon={<MdMenuOpen />}>
                READ MORE
              </Button>
              <p className="status" title="Status">{tourn.status}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default Channeldashboard;