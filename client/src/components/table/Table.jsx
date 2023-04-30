import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDate } from "../../helpers/getDateFormat";
import { getTime } from "../../helpers/getTimeFormat";
import { getWeekDay } from "../../helpers/getWeekDayFormat";

const List = ({ uid, username, img, entries }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Full Name</TableCell>
            <TableCell className="tableCell">Scan Time</TableCell>
            <TableCell className="tableCell">Week Day</TableCell>
            <TableCell className="tableCell">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(entries).map((entry) => (
            <TableRow key={entry._id}>
              <TableCell className="tableCell">{uid}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={img} alt="" className="image" />
                  {username}
                </div>
              </TableCell>
              <TableCell className="tableCell">{getTime(entry.enterDate)}</TableCell>
              <TableCell className="tableCell">{getWeekDay(entry.enterDate)}</TableCell>
              <TableCell className="tableCell">{getDate(entry.enterDate)}</TableCell>
              <TableCell className="tableCell">{}</TableCell>
              <TableCell className="tableCell">
                <p className={`status`}>{}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;