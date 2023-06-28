import React, {useEffect, useState} from 'react';
import DataTableCar from '../datatable/DatatableCar';

const Cartable = ({ userType }) => {
    const [carEntries, setCarEntries] = useState([]); 

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
          field: "username",
          headerName: "Owner Name",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src={`data:image/jpeg;base64,${params.row.img}`} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "modelName", headerName: "Model Name", width: 150},
        {
          field: "date",
          headerName: "Date",
          width: 200,
        },
        {
          field: "enterTime",
          headerName: "Scan Time",
          width: 150,
        }
    ];

    const carEntryMappedRows = carEntries.map(carEntry => ({
      id: carEntry._id,
      username: (carEntry.carId?.ownerId?.firstName ?? '') + ' ' + (carEntry.carId?.ownerId?.lastName ?? ''),
      img: carEntry.carId?.ownerId?.images[0] ?? '',
      licensePlate: carEntry.carId?.licensePlate ?? '',
      modelName: carEntry.carId?.modelName ?? '',
      date: getDate(carEntry.scanDate), 
      enterTime: getTime(carEntry.scanDate),
    }));
  

    console.log(carEntryMappedRows);
    
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
        
        fetch(`http://localhost:8800/api/carEntries`, { 
            method: "GET",
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          })
            .then(response => response.json())
            .then(json => setCarEntries(json))
            .then(console.log(carEntries));
    }, []);

    return (
        <DataTableCar
            rows={carEntryMappedRows}
            columns={userColumns}
        /> 
    )
}

export default Cartable