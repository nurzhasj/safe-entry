import './dashboard.scss';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="dashboardContainer">
          <Navbar/>
          dashboard container
      </div>
    </div>
  )
}

export default Dashboard