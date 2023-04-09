import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import HelpIcon from '@mui/icons-material/Help';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BadgeIcon from '@mui/icons-material/Badge';

import logo from '../../assets/safe-entry-logo.png';

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img src={logo} alt="" />
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/> 
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <div className="span">Dashboard</div>
                    </Link>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <SupervisedUserCircleIcon className='icon'/>
                    <Link to="/students" style={{ textDecoration: "none" }}>
                        <div className="span">Students</div>
                    </Link>
                </li>
                <li>
                    <BadgeIcon className='icon'/>
                    <Link to="/employees" style={{ textDecoration: "none" }}>
                        <div className="span">Employees</div>
                    </Link>
                </li>
                <li>
                    <DirectionsCarIcon className='icon'/>
                    <div className="span">Car Plates</div>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <div className="span">Profile</div>
                </li>
                <li> 
                    <SettingsIcon className='icon'/>
                    <div className="span">Settings</div>
                </li>
                <li>
                    <LogoutIcon className='icon'/> 
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <div className="span">Log Out</div>
                    </Link>
                </li> 
                <p className="title">Support</p>
                <li> 
                    <HelpIcon className='icon'/>
                    <div className="span">Get Help</div>
                </li>
                <li>
                    <RateReviewIcon className='icon'/> 
                    <div className="span">Feedback</div>
                </li> 
            </ul>
        </div>
        <div className="bottom">
            {/* <div className="colorOption"></div>
            <div className="colorOption"></div>    */}
        </div> 
    </div>
  )
}

export default Sidebar;