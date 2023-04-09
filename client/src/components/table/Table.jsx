import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 190103276,
      product: "Nurbayev Nurzhas",
      img: "https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s",
      customer: "12:45",
      date: "14:05",
      amount: "1 hour 20 min",
      method: "Tuesday",
      status: "4.03.2022",
    },
    {
      id: 190103276,
      product: "Nurbayev Nurzhas",
      img: "https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s",
      customer: "12:45",
      date: "14:05",
      amount: "1 hour 20 min",
      method: "Tuesday",
      status: "4.03.2022",
    },
    {
      id: 190103276,
      product: "Nurbayev Nurzhas",
      img: "https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s",
      customer: "12:45",
      date: "14:05",
      amount: "1 hour 20 min",
      method: "Tuesday",
      status: "4.03.2022",
    },
    {
      id: 190103276,
      product: "Nurbayev Nurzhas",
      img: "https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s",
      customer: "12:45",
      date: "14:05",
      amount: "1 hour 20 min",
      method: "Tuesday",
      status: "4.03.2022",
    },
    {
      id: 190103276,
      product: "Nurbayev Nurzhas",
      img: "https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s",
      customer: "12:45",
      date: "14:05",
      amount: "1 hour 20 min",
      method: "Tuesday",
      status: "4.03.2022",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Full Name</TableCell>
            <TableCell className="tableCell">Enter Time</TableCell>
            <TableCell className="tableCell">Exit Time</TableCell>
            <TableCell className="tableCell">Spent time</TableCell>
            <TableCell className="tableCell">Week Day</TableCell>
            <TableCell className="tableCell">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <p className={`status ${row.status}`}>{row.status}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;