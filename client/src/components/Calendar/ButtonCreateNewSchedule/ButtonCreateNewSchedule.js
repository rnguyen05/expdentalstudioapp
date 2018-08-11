import React from "react";
// import tuiCalendar from 'tui-calendar'; 
import '../css/Calendar.css';
import '../css/icon.css';

const ButtonCreateNewSchedule = props =>(
    // <form>
    <div className="lnb-new-schedule">
            <button id="btn-new-schedule" onClick={props.createNewSchedule}  type="button" 
           data-toggle="modal"  >
                New schedule</button>
               
    </div>
    // </form>createNewSchedule
)

export default ButtonCreateNewSchedule ; 