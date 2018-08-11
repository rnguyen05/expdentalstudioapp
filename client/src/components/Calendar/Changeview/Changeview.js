import React from "react";
// import tuiCalendar from 'tui-calendar';
import "../css/Calendar.css";
import "../css/icon.css";

// class Changeview extends Component {
const Changeview = props => (
  <div className="Changeview">
    {/* <div>For test </div> */}
    <span className="dropdown">
      <button
        id="dropdownMenu-calendarType"
        className="btn btn-default btn-sm dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <i id="calendarTypeIcon" className="calendar-icon ic_view_month" />
        <span id="calendarTypeName">{props.calendarTypeName}</span>
        &nbsp;
        <i className="calendar-icon tui-full-calendar-dropdown-arrow" />
      </button>
      <ul
        className="dropdown-menu"
        role="menu"
        onClick={props.onClickMenu}
        aria-labelledby="dropdownMenu-calendarType"
      >
        <li role="presentation">
          <a
            className="dropdown-menu-title"
            role="menuitem"
            onClick={props.onClickMenu}
            value="Daily"
            data-action="toggle-daily"
          >
            <i className="calendar-icon ic_view_day" />
            Daily
          </a>
        </li>
        <li role="presentation">
          <a
            className="dropdown-menu-title"
            role="menuitem"
            onClick={props.onClickMenu}
            value="Weekly"
            data-action="toggle-weekly"
          >
            <i className="calendar-icon ic_view_week" />
            Weekly
          </a>
        </li>
        <li role="presentation">
          <a
            className="dropdown-menu-title"
            role="menuitem"
            onClick={props.onClickMenu}
            value="Month"
            data-action="toggle-monthly"
          >
            <i className="calendar-icon ic_view_month" />
            Month
          </a>
        </li>
        <li role="presentation">
          <a
            className="dropdown-menu-title"
            role="menuitem"
            onClick={props.onClickMenu}
            value="2 weeks"
            data-action="toggle-weeks2"
          >
            <i className="calendar-icon ic_view_week" />2 weeks
          </a>
        </li>
        <li role="presentation">
          <a
            className="dropdown-menu-title"
            role="menuitem"
            onClick={props.onClickMenu}
            value="3 weeks"
            data-action="toggle-weeks3"
          >
            <i className="calendar-icon ic_view_week" />3 weeks
          </a>
        </li>
      </ul>
    </span>
  </div>
);
export default Changeview;
