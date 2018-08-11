import React from "react";
// import tuiCalendar from 'tui-calendar';
import "../css/Calendar.css";
import "../css/icon.css";

// class Changeview extends Component {
const CalendarItem = props => (
  <div
    id="calendar"
    calendar={props.calendar}
    schedule={props.scheduleList}
    onChange={props.loadScheduleList}
  />
);
export default CalendarItem;
