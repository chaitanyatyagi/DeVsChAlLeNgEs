import React from 'react'
import '../style.css'
import DailyReport from './DailyReport'
import DailyReport1 from './DailyReport1'
import DailyReport2 from './DailyReport2'
import DailyReport3 from './DailyReport3'
import TodayReportOne from './TodayReportOne'
import TodayReportTwo from './TodayReportTwo'
import {DailyReportSearchAction,DailyReportFetchAction} from '../redux/DailyReport/DailyReportActions'
import {useSelector,useDispatch} from 'react-redux'


function Background() {
    const place = useSelector(state => state.place)
    // const placeData = useSelector(state => state.placeData)
    const dispatch = useDispatch()
    return (
        <div className='Background'>
            <div className='Left'>
            <div className='Search'>
                <input type="text" value={place} onChange={event => {dispatch(DailyReportSearchAction(event.target.value))}}/>
                <button onClick={() => {dispatch(DailyReportFetchAction(place))}}><img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="search-icon"/></button>
            </div>
            <div className='LocationImage'></div>
            <div className='Temperature'></div>
            <div className='WeatherDetail'></div>
            <div className='Date'></div>
            <div className='Location'></div>
            </div>
            <div className = 'Right'>
                <div className='ButtonConvertor'></div>
                <div className='DailyReport'>
                    <DailyReport />
                    <DailyReport1 />
                    <DailyReport2 />
                    <DailyReport3 />
                    {/* <DailyReport placeData={placeData}/> */}
                </div>
                <div className='Heading'>Today's Highlight</div>
                <div className='TodayReportOne'>
                    <TodayReportOne />
                    <TodayReportOne />
                </div>
                <div className='TodayReportTwo'>
                <TodayReportTwo />
                    <TodayReportTwo />
                </div>
                <div className='Profile'>
                    Made By Chaitanya Tyagi<a href="https://github.com/chaitanyatyagi">@GitHub</a><a href="https://www.linkedin.com/in/chaitanya-tyagi-21964b201/">@LinkeDin</a>
                </div>
            </div>
        </div>
    )
}

export default Background
