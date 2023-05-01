import "./list.scss"
import Sidebar from "../components/sidebar/Sidebar"
import Navbar from "../components/navbar/Navbar"
import UserTable from "../components/usertable/Usertable"
import CarTable from "../components/cartable/Cartable";

const List = ({ tableType, userType }) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {tableType === "cars" ? (
          <CarTable />
        ) : (
          <UserTable userType={userType} />
        )}
      </div>
    </div>
  )
}

export default List