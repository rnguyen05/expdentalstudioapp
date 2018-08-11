import React, { Component } from "react";
import tuiCalendar from 'tui-calendar'; 
import '../css/Calendar.css';
import '../css/icon.css';
import CalendarListItem from './CalendarListItem';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Container, Row, Col} from 'reactstrap';


class CalendarList extends Component {
    // state={
    //     calendarList:this.props.calendarList
  
    // }
    render(){
        return(
         <div id="lnb-calendars" onChange={this.props.onChangeCalendars} className="lnb-calendars">
           
                <div className="lnb-calendars-item">
                    <label>
                        <input className="tui-full-calendar-checkbox-square" 
                        type="checkbox" value="all" defaultChecked />
                        <span></span>
                        <strong>View all</strong>
                    </label>
                </div>
            
            <div id="calendarList"  className="lnb-calendars-d1">
                {this.props.calendarList.map((search, i)=> {                    
 
                return (  
                        
                    <div className="lnb-calendars-item" >
                        <label>
                            <input type="checkbox" 
                            className="tui-full-calendar-checkbox-round" 
                            value={search.id} checked={search.checked}/>
                            {/* <CalendarListItem 
                            value={search.id}
                            checked={search.checked} 
                            onChangechecked={}/> */}
                            <span style= {{borderColor: `${search.borderColor}` 
                            , background:`${search.borderColor}`} }></span>
                            <span> {search.name} </span>
                        </label>
                       
                    </div> 
                    
                );
               
              })} </div>
            </div>
   
                
        )
    }
}

// const CalendarList = props=>(
//    
    
// )
export default CalendarList;