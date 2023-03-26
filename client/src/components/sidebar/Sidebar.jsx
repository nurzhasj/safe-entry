import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import HelpIcon from '@mui/icons-material/Help';
import RateReviewIcon from '@mui/icons-material/RateReview';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img src="safe-entry-logo.png" alt="" />
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/> 
                    <div className="span">Dashboard</div>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <SupervisedUserCircleIcon className='icon'/>
                    <div className="span">Students</div>
                </li>
                <li>
                    <PeopleIcon className='icon'/>
                    <div className="span">Employees</div>
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
                    <div className="span">Log Out</div>
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