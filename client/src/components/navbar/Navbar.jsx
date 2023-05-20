import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
    const userImage = localStorage.getItem('userImage');
    const { darkMode, dispatch } = useContext(DarkModeContext);
     
  return (
    <div className="navbar">
        <div className="wrapper">     
            <div className="search">
                <input type="text" placeholder='Search...' />
                <SearchIcon/>
            </div>

            <div className="items">
                <div className="item">
                    <LanguageIcon className='icon'/>
                    English
                </div>
                <div className="item" onClick={() => dispatch({type: "TOGGLE"})}>
                    {darkMode ? <DarkModeIcon className='icon'/> : <LightModeIcon className='icon'/>}
                </div>
                <div className="item">
                    <NotificationsIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <img src={`data:image/jpeg;base64,${userImage}`} alt="" className='avatar'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar; 