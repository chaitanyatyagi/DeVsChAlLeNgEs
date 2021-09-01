import '../ComponentStyle/DailyReportCard.css'
import {useSelector} from 'react-redux'

function DailyReport() {
    const placeData = useSelector(state => state.placeData)
    return (
        placeData==={}?
        '':
        <div className='DailyReportCard'>
            <div className='DailyReportInside'></div>
            <div className='DailyReportInside'><img src="" alt="" /></div>
            <div className='DailyReportInside'></div>
        </div>
    )
}


export default DailyReport
