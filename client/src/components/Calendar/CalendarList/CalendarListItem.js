import React from "react";
// import tuiCalendar from 'tui-calendar';
import "../css/Calendar.css";
import "../css/icon.css";

const CalendarListItem = props => (
  <div>
    <input
      type="checkbox"
      className="tui-full-calendar-checkbox-round"
      value={props.value}
      checked={props.checked}
    />
  </div>
);
export default CalendarListItem;
