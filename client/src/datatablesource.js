export const userColumns = [
    { field: "id", headerName: "stdId", width: 140 },
    {
      field: "user",
      headerName: "Student",
      width: 250,
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
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "age",
      headerName: "Enter Time",
      width: 100,
    },
    {
      field: "status",
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
      email: "1nur@gmail.com",
      age: '8:40',
      status: '18:00'
    },
    {
      id: 190103275,
      username: "Zhamshidbek Abdulkhamidov",
      img: "https://media.licdn.com/dms/image/C4E03AQGaeVSxfWVjLA/profile-displayphoto-shrink_800_800/0/1605592086897?e=2147483647&v=beta&t=n3CxEbPR-pwEqRRNZx0JZc7dRTSiqRKUevHBKm-MfeM",
      email: "2nur@gmail.com",
      age: '8:41',
      status: '18:01'
    },
    {
      id: 190103330,
      username: "Bill Gates",
      img: "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
      email: "3nur@gmail.com",
      age: '8:45',
      status: '12:05'
    },
    {
      id: 190103419,
      username: "Steve Jobs",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
      email: "4nur@gmail.com",
      age: '12:04',
      status: '12:40'
    },
    {
      id: 190103103,
      username: "Marc Zuckerberg",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      email: "5nur@gmail.com",
      age: '9:40',
      status: '18:00'
    },
    {
      id: 190103001,
      username: "Sergey Brin",
      img: "https://m.media-amazon.com/images/M/MV5BOGMwNTFmMDQtY2FhMC00MDc5LWIzNzEtODc0NTA3OTAyZjhlXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
      email: "6nur@gmail.com",
      age: '10:40',
      status: '18:00'
    },
    {
      id: 190103423,
      username: "Elon Musk",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Elon_Musk_Colorado_2022_%28cropped%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped%29.jpg",
      email: "7nur@gmail.com",
      age: '11:40',
      status: '18:00'
    },
    {
      id: 190103234,
      username: "Jeff Bezos",
      img: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
      email: "8nur@gmail.com",
      age: '12:40',
      status: '17:00'
    },
    {
      id: 190103432,
      username: "Nurzhas Nurbayev",
      img: "https://media.licdn.com/dms/image/C4D03AQEC00YzH1CrDA/profile-displayphoto-shrink_800_800/0/1612520044054?e=2147483647&v=beta&t=XyWjuzvyBOwBpobt1hMH8TS4byW9DD3EA71BWFSA9_s",
      email: "nur@gmail.com",
      age: '13:40',
      status: '15:00'
    },
    {
      id: 190103234,
      username: "Zhamshidbek Abdulkhamidov",
      img: "https://media.licdn.com/dms/image/C4E03AQGaeVSxfWVjLA/profile-displayphoto-shrink_800_800/0/1605592086897?e=2147483647&v=beta&t=n3CxEbPR-pwEqRRNZx0JZc7dRTSiqRKUevHBKm-MfeM",
      email: "nur@gmail.com",
      age: '14:40',
      status: '15:00'
    },
  ];