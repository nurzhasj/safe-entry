export const userColumns = [
    { field: "id", headerName: "stdId", width: 140 },
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
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "enterTime",
      headerName: "Enter Time",
      width: 100,
    },
    {
      field: "exitTime",
      headerName: "Exit Time",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 190103276,
      username: "Nurbayev Nurzhas",
      img: "https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s",
      date: "16.04.2023",
      enterTime: '8:40',
      exitTime: '18:00'
    },
    {
      id: 190103275,
      username: "Zhamshidbek Abdulkhamidov",
      img: "https://media.licdn.com/dms/image/C4E03AQGaeVSxfWVjLA/profile-displayphoto-shrink_800_800/0/1605592086897?e=2147483647&v=beta&t=n3CxEbPR-pwEqRRNZx0JZc7dRTSiqRKUevHBKm-MfeM",
      date: "16.04.2023",
      enterTime: '8:41',
      exitTime: '18:01'
    },
    {
      id: 190103330,
      username: "Bill Gates",
      img: "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
      date: "16.04.2023",
      enterTime: '8:45',
      exitTime: '12:05'
    },
    {
      id: 190103419,
      username: "Steve Jobs",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
      date: "16.04.2023",
      enterTime: '12:04',
      exitTime: '12:40'
    },
    {
      id: 190103103,
      username: "Marc Zuckerberg",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      date: "15.04.2023",
      enterTime: '9:40',
      exitTime: '18:00'
    },
    {
      id: 190103001,
      username: "Sergey Brin",
      img: "https://m.media-amazon.com/images/M/MV5BOGMwNTFmMDQtY2FhMC00MDc5LWIzNzEtODc0NTA3OTAyZjhlXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
      date: "15.04.2023",
      enterTime: '10:40',
      exitTime: '18:00'
    },
    {
      id: 190103423,
      username: "Elon Musk",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Elon_Musk_Colorado_2022_%28cropped%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped%29.jpg",
      date: "15.04.2023",
      enterTime: '11:40',
      exitTime: '18:00'
    },
    {
      id: 190103234,
      username: "Jeff Bezos",
      img: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
      date: "15.04.2023",
      enterTime: '12:40',
      exitTime: '17:00'
    },
    {
      id: 190103432,
      username: "Nurzhas Nurbayev",
      img: "https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s",
      date: "15.04.2023",
      enterTime: '13:40',
      exitTime: '15:00'
    },
    {
      id: 190103234,
      username: "Zhamshidbek Abdulkhamidov",
      img: "https://media.licdn.com/dms/image/C4E03AQGaeVSxfWVjLA/profile-displayphoto-shrink_800_800/0/1605592086897?e=2147483647&v=beta&t=n3CxEbPR-pwEqRRNZx0JZc7dRTSiqRKUevHBKm-MfeM",
      date: "15.04.2023",
      enterTime: '14:40',
      exitTime: '15:00'
    },
  ];