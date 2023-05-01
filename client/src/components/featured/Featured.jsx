import './featured.scss';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';


const Featured = ({ type }) => {
    const count = type === 'daily' ? '2145' : '16345';

  return (
    <div className="featured">
        <div className="top">
            <div className="title">
                {type} scans
            </div>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbarWithChildren 
                    value={70}  
                    strokeWidth={3}
                    styles={{ 
                        path: {stroke: `#6BB2FF`},
                        text: {fill: `#00008b`, fontSize: '32px'} 
                    }}
                    >
                    <div className="iconContainer">
                        <DocumentScannerIcon 
                            className='icon'
                        />
                        <div className="count">{count}</div>
                        <p className='desc'>Scans</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    </div>
  )
}

export default Featured