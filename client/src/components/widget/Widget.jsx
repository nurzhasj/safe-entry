import './widget.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PanToolIcon from '@mui/icons-material/PanTool';

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "day-students": 
            data = {
                title: 'Students day records',
                count: 1042,
                link: 'See all students',
                icon: <PersonOutlineIcon 
                    className='icon' 
                    style={{ 
                        color: "crimson",
                        backgroundColor: "rgba(255,0,0,0.2)"
                     }}/>,
            };
        break;
        case "day-employees": 
            data = {
                title: 'Employees day records',
                count: 234,
                link: 'See all employees',
                icon: <BadgeIcon 
                    className='icon' 
                    style={{ 
                        color: "green",
                        backgroundColor: "rgba(0,255,0,0.2)"
                     }}/>,
            };
        break;
        case "day-cars": 
            data = {
                title: 'Cars day records',
                count: 53,
                link: 'See all cars',
                icon: <DirectionsCarIcon 
                    className='icon'
                    style={{ 
                        color: "blue",
                        backgroundColor: "rgba(0, 0, 255, 0.2)"
                     }}/>,
            };
        break;
        case "unauth-cars": 
            data = {
                title: 'Cars unautorized attempt',
                count: 2,
                link: 'See all records',
                icon: <PanToolIcon 
                    className='icon'
                    style={{ 
                        color: "orange",
                        backgroundColor: "rgba(255, 251, 10, 0.8)"
                     }}/>,
            };
        break;
        default:
            break;
    }

  return (
    <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.count}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <p className="percentage positive">
                20%
            </p>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget