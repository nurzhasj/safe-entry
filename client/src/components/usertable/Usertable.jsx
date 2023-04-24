import React, {useEffect, useState} from 'react';
import DataTable from '../datatable/Datatable';

const Usertable = () => {
    const [users, setUsers] = useState([]); 

    const userColumns = [
        { field: "uid", headerName: "Student ID", width: 105},
        {
          field: "user",
          headerName: "Student",
          width: 300,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 150},
        {
          field: "date",
          headerName: "Date",
          width: 150,
        },
        {
          field: "enterTime",
          headerName: "Enter Time",
          width: 100,
        }
      ];
    
    const userMapepdRows = users.flatMap(user => {
        return user.entries.map(entry => ({
            id: entry._id,
            uid: user.uid,
            username: user.firstName + ' ' + user.lastName,
            email: user.email,
            img: user.images[0], 
            date: getDate(entry.enterDate), 
            enterTime: getTime(entry.enterDate),
        }));
    });
    
    function getDate(enterDate) {
        var dt = new Date(enterDate);

        const dateStr = dt.getFullYear() + " " + new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dt) + " " + dt.getDate();

        return dateStr;
    }

    function getTime(enterDate) {
        var dt = new Date(enterDate);

        const timeStr = dt.getHours() + ":" + ('0' + dt.getMinutes()).slice(-2);

        return timeStr;
    }

    useEffect(() => {
        fetch('http://localhost:8800/api/users', { method: "GET" })
            .then(response => response.json())
            .then(json => setUsers(json));
    });

    console.log(users);

    return (
        <DataTable
            rows={userMapepdRows}
            columns={userColumns}
        /> 
    )
}

export default Usertable