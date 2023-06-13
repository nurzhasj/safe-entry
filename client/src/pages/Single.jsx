import "./single.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import ChartArea from "../components/chart/ChartArea";
import List from "../components/table/Table";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Single = () => {
  const [user, setUser] = useState([]);
  const { entryId } = useParams();

  useEffect(() => {
      const fetchData = async() => {
          try {
              const response = await fetch(`http://localhost:8800/api/users/entry/${entryId}`);
              const json = await response.json();
              setUser(json);
          } catch(error) {
              console.log('Error fetching user:', error);
          }
      };
  
      fetchData();
  }, [entryId]);

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
            {user.images ? (
              <img
                src={`data:image/jpeg;base64,${user.images[0]}`}
                alt=""
                className="itemImg"
              />
            ) : (
                <span>No image available</span>
            )}
              <div className="details">
                <h1 className="itemTitle">{user.firstName} {user.lastName}</h1>
                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">{user.email}</div>
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
          <List
            uid={user.uid}
            username={`${user.firstName} ${user.lastName}`}
            img={user.images ? `data:image/jpeg;base64,${user.images[0]}` : null} 
            entries={user.entries || []} 
          />
        </div>
      </div>
    </div>
  );
};

export default Single;