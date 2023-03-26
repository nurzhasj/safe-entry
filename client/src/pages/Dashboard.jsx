import './dashboard.scss';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Widget from '../components/widget/Widget';
import Featured from '../components/featured/Featured';
import Chart from '../components/chart/Chart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="dashboardContainer">
          <Navbar/>
          <div className="widgets">
              <Widget type="day-students"/>
              <Widget type="day-employees"/>
              <Widget type="day-cars"/>
              <Widget type="unauth-cars"/>
          </div>
          <div className="charts">
            <div className="featured-wrapper">
              <Featured />
              <Featured />
            </div>
              <Chart/>
          </div>
      </div>
    </div>
  )
}

export default Dashboard