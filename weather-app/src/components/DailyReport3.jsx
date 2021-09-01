import '../ComponentStyle/DailyReportCard.css'
import {useSelector} from 'react-redux'

function DailyReport() {
    const placeData = useSelector(state => state.placeData)
    return (
        placeData.location?
        <div className='DailyReportCard'>
            <div className='DailyReportInside'>{placeData.location.name}</div>
            <div className='DailyReportInside'><img src="" alt="" /></div>
            <div className='DailyReportInside'></div>
        </div>: <h1>Place Not Found</h1>
    )
}


export default DailyReport
