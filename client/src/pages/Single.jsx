import "./single.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import ChartArea from "../components/chart/ChartArea";
import List from "../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Nurzhas Nurbayev</h1>
                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">190103276@stu.sdu.edu.kz</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Faculty:</div>
                  <div className="itemValue">Engineering</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Year:</div>
                  <div className="itemValue">
                    4th
                  </div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">Kazakhstan</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <ChartArea aspect={3 / 1} title="All Entries (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Scans</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;