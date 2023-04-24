import "./list.scss"
import Sidebar from "../components/sidebar/Sidebar"
import Navbar from "../components/navbar/Navbar"
import UserTable from "../components/usertable/Usertable"

const List = ({ userType }) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserTable userType={userType}/>
      </div>
    </div>
  )
}

export default List