import './featured.scss';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';


const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <div className="title">
                Daily scans
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
                        <div className="count">6,145</div>
                        <p className='desc'>Scans</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    </div>
  )
}

export default Featured