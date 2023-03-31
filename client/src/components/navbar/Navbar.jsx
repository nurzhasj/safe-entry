import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
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
                <div className="item">
                    <DarkModeIcon className='icon'/>
                </div>
                <div className="item">
                    <NotificationsIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <img src="https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s" alt="" className='avatar'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar; 