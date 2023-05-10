import React, {useEffect, useState} from 'react';
import DataTable from '../datatable/Datatable';

const Cartable = ({ userType }) => {
    const [cars, setCars] = useState([]); 

    const userColumns = [
        { 
          field: "licensePlate", 
          headerName: "License Plate", 
          width: 100,
          renderCell: (params) => {
            return <div>{params.row.licensePlate}</div>;
          },
        },
        {
          field: "user",
          headerName: "Owner Name",
          width: 300,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="" />
                {params.row.ownerId}
              </div>
            );
          },
        },
        { field: "modelName", headerName: "Model Name", width: 150},
        {
          field: "date",
          headerName: "Date",
          width: 100,
        },
        {
          field: "enterTime",
          headerName: "Scan Time",
          width: 100,
        }
    ];

    const rows = [
        {
            id: "1234",
            licensePlate : "123EOA08",
            modelName : "Audi A4",
            ownerId : "640460ce1218fe6d53cd49d0",
            carEntries : []
        },
        {
            id: "1235",
            licensePlate : "200NUR02",
            modelName : "Panamera",
            ownerId : "640460ce1218fe6d53cd49d0",
            carEntries : [
                {
                    "id" : "644ecd10e862d9c81ea5e04c",
                    "carId" : "644ebb7ae9c4b50152def1db",
                    "scanDate" : "2023-04-24T13:36:54.000+00:00"
                }
            ]
        },
        {
            id: "1236",
            licensePlate : "007AAA02",
            modelName : "Camaro",
            ownerId : "640460ce1218fe6d53cd49d0",
            carEntries : []
        },
    ];
    // const userMapepdRows = users.flatMap((user) => {
    //     return user.entries.map(entry => ({
    //         id: entry._id,
    //         uid: user.uid,
    //         username: user.firstName + ' ' + user.lastName,
    //         email: user.email,
    //         img: user.images[0], 
    //         date: getDate(entry.enterDate), 
    //         enterTime: getTime(entry.enterDate),
    //     }));
    // });
    
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
        const token = localStorage.getItem('token');
        
        fetch(`http://localhost:8800/api/cars`, { 
            method: "GET",
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          })
            .then(response => response.json())
            .then(json => setCars(json))
            .then(console.log(cars));
    });

    return (
        <DataTable
            rows={rows}
            columns={userColumns}
        /> 
    )
}

export default Cartable