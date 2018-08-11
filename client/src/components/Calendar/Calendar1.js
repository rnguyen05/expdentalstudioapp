import React, {Component} from "react";
import tuiCalendar from 'tui-calendar'; 
import Changeview from './Changeview/Changeview';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ButtonCreateNewSchedule from './ButtonCreateNewSchedule/ButtonCreateNewSchedule';
import CalendarList from './Calendars';
// import Renderrange from './Renderrange/Renderrange'
import moment from 'moment';
import chance from 'chance';
import tuiDatePicker from 'tui-date-picker';
// import './css/tui-calendar.min.css';
import 'tui-calendar/dist/tui-calendar.min.css';
import API from "../utils/API";

class Calendar extends Component {
    state={
    
        calendarTypeName:'DropDown',  
        click:"",   
        buttonId:"", 
        today: new Date(),
        selectedCalendar:'',
        calendar: new tuiCalendar(document.getElementById('calendar'), 
        {
            defaultView: 'week',
            taskView: true,    // can be also ['milestone', 'task']
            scheduleView: true,  // can be also ['allday', 'time']
            useCreationPopup: true,
            useDetailPopup: true,
            ScheduleCreationPopup: true,
            //calendars: API.get
            range1 : [new Date(2015, 2, 1), new Date(2015, 3, 1)],
            range2 : [1465570800000, 1481266182155], // timestamps
            template: {
                milestone: function(schedule) {
                    return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
                },
                milestoneTitle: function() {
                    return 'Milestone';
                },
                task: function(schedule) {
                    return '&nbsp;&nbsp;#' + schedule.title;
                },
                taskTitle: function() {
                    return '<label><input type="checkbox" />Task</label>';
                },
                allday: function(schedule) {
                   return schedule.title + ' <i class="fa fa-refresh"></i>';
                //    return getTimeTemplate(schedule, true);
                },
                alldayTitle: function() {
                    return 'All Day';
                },
                time: function(schedule) {
                    return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
                    // return getTimeTemplate(schedule, true);
                },
                monthGridHeader: function(model) {
                    var date = new Date(model.date);
                    var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
                    return template;
                  }
            },
            month: {
                daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                startDayOfWeek: 0,
                narrowWeekend: true
            },
            week: {
                daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                startDayOfWeek: 0,
                narrowWeekend: true
            }
     
  })

}

   


  componentDidMount(){
        console.log("inside componentdid  mount");
        this.getAllCalendars();
        this.createSchedule(this.state.calendar);
    
    // API.createCalendar({
    //     name : 'My Calendar',
    //     color :'#ffffff',
    //     bgColor : '#9e5fff',
    //     dragBgColor : '#9e5fff',
    //     borderColor : '#9e5fff'
    // });
    
        $('#btn-save-schedule').on('click', this.onNewSchedule);
//    $('#btn-new-schedule').on('click', this.createNewSchedules);
        this.state.calendar.on('beforeCreateSchedule',this.beforeCreateSchedule);
        this.state.calendar.on('clickDayname',this.clickDayname);
        this.state.calendar.on('clickSchedule',this.clickSchedule);
        this.state.calendar.on('beforeUpdateSchedule',this.beforeUpdateSchedule);

   // this.setState({click:$('#btn-save-schedule').on('click', onNewSchedule)}); //.addEventListener('click', this.onNewSchedule);
  //this.state.calendar.render();
  };
    getAllCalendars=()=>{
    // let tempCals =  API.getCalendarList();
       console.log("calendars",API.getCalendarList());
   }
    
  getTimeTemplate = (schedule, isAllDay)=> {
  
    var html = [];
    var start = moment(schedule.start.toUTCString());
    if (!isAllDay) {
        html.push('<strong>' + start.format('HH:mm') + '</strong> ');
    }
    if (schedule.isPrivate) {
        html.push('<span class="calendar-font-icon ic-lock-b"></span>');
        html.push(' Private');
    } else {
        if (schedule.isReadOnly) {
            html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
        } else if (schedule.recurrenceRule) {
            html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
        } else if (schedule.attendees.length) {
            html.push('<span class="calendar-font-icon ic-user-b"></span>');
        } else if (schedule.location) {
            html.push('<span class="calendar-font-icon ic-location-b"></span>');
        }
        html.push(' ' + schedule.title);
    }

    return html.join('');
}

      createSchedule= calendar=>{
        calendar.createSchedules([
            {
                id: '1',
                calendarId: '1',
                title: 'my schedule',
                category: 'time',
                dueDateClass: '',
                start: '2018-07-30T22:30:00+09:00',
                end: '2018-07-31T02:30:00+09:00'
            },
            {
                id: '2',
                calendarId: '1',
                title: 'second schedule',
                category: 'time',
                dueDateClass: '',
                start: '2018-08-01T17:30:00+09:00',
                end: '2018-08-02T17:31:00+09:00'
            }
        ]);
      }
      
     setoptionsandview = (calendar,options,viewName,flag)=>{
         
         if(options){
            this.state.calendar.setOptions(options,true);
            // calendar.setOptions(options,false);
           //  console.log("insetoption function",options);
            } ;
        //  calendar.setOptions(options,flag);

          this.state.calendar.changeView(viewName,true);
        //   console.log("in changeView function",viewName);
        //   console.log("insetoption function******", this.state.calendar);
       // return calendar;
     };
     changeview = (calendar,viewName,flag)=>{
       
        return calendar;
     };



  clickDayname = date=>{
    console.log('clickDayname', date);
  }
  clickSchedule = event =>{
    console.log("event inside clickSchedule",event);
  }
  beforeUpdateSchedule =event =>{
    console.log("event inside beforeUpdateSchedule*", event);
    // event.schedule.start = event.start;
    // event.schedule.end = event.end;
    // this.statecalendar.updateSchedule(event.schedule.id, event.schedule.calendarId, event.schedule);
    var schedule = event.schedule;
    var startTime = event.start;
    var endTime = event.end;
    var location = event.schedule.location;
    this.state.calendar.updateSchedule(schedule.id, schedule.calendarId, {
        start: startTime,
        end: endTime,
        location: location
    });
    this.state.calendar.render();
}




beforeCreateSchedule = event=>{
    console.log("event inside beforeCreateSchedule", event);
    var startTime = event.start;
    var endTime = event.end;
    var isAllDay = event.isAllDay;
    var guide = event.guide;
    var triggerEventName = event.triggerEventName;
    var schedule={};

    if (triggerEventName === 'click') {
        // open writing simple schedule popup
        //schedule = {...};
        schedule= {
            id: '3',
            calendarId: this.state.calendar.id,
            title: 'my schedule',
            category: 'time',
            dueDateClass: '',
            start: startTime,
            end: endTime
        }
    } else if (triggerEventName === 'dblclick') {
        // open writing detail schedule popup
        schedule= {
            id: '4',
            calendarId:this.state.calendar.id,
            title: 'my schedule',
            category: 'time',
            dueDateClass: '',
            start: startTime,
            end: endTime
        }
    }

    this.state.calendar.createSchedules([schedule]);
   // this.state.calendar.render();
}
  onNewSchedule = event =>{
    console.log("event");
      console.log("event",event);
      var title = $('#new-schedule-title').val();
      var location = $('#new-schedule-location').val();
      var isAllDay = document.getElementById('new-schedule-allday').checked;
      var start = this.state.datePicker.getStartDate()//new Date(2017, 3, 1);//datepicker.getStartDate();
      var end = this.state.datePicker.getEndDate(); //new Date(2017, 5, 1);
      var calendar = this.state.selectedCalendar ? this.state.selectedCalendar : CalendarList[0];

      if (!title) {
          return;
      }

      this.state.calendar.createSchedules([{
          id: String(chance.guid()),
          calendarId: calendar.id,
          title: title,
          isAllDay: isAllDay,
          start: start,
          end: end,
          category: isAllDay ? 'allday' : 'time',
          dueDateClass: '',
          color: calendar.color,
          bgColor: calendar.bgColor,
          dragBgColor: calendar.bgColor,
          borderColor: calendar.borderColor,
          raw: {
              location: location
          },
          state: 'Busy'
      }]);

      $('#modal-new-schedule').modal('hide');
  }
  getDataAction = target=> {
    return target.dataset ? target.dataset.action : target.getAttribute('data-action');
}
getValue = target =>{
    return  target.getAttribute('value');
}
 onClickMenu = event=> {
    //var target = $(event.target).closest('a[role="menuitem"]')[0];
    var target = event.target;
    
    console.log("target",target);
    
   
    // console.log("this.state.action",this.state.action);
   // console.log("target.value",this.getValue(target));
    var action = this.getDataAction(target);
   // console.log("action",action);
 this.setState({value:this.getValue(target)});
 //console.log("this.state.value==>",this.state.value);
  var options = this.state.calendar.getOptions();
    var viewName = '';
   // console.log("options",options);
    this.setState({calendarTypeName:this.getValue(target)})

  
    switch (action) {
        case 'toggle-daily':
            viewName = 'day';
            console.log(viewName);
            break;
        case 'toggle-weekly':
            viewName = 'week';
            console.log(viewName);
            break;
        case 'toggle-monthly':
           options.month.visibleWeeksCount = 6;
            viewName = 'month';
            console.log(viewName);
            break;
        case 'toggle-weeks2':
           options.month.visibleWeeksCount = 2;
            viewName = 'month';
            break;
        case 'toggle-weeks3':
           options.month.visibleWeeksCount = 3;
            viewName = 'month';
            console.log(viewName);
            break;
        case 'toggle-narrow-weekend':
           options.month.narrowWeekend = !options.month.narrowWeekend;
           options.week.narrowWeekend = !options.week.narrowWeekend;
           viewName = this.state.calendar.getViewName();
          // viewName = 'toggle-narrow-weekend';
           console.log(viewName);
           target.querySelector('input').checked = options.month.narrowWeekend;
            break;
        case 'toggle-start-day-1':
           options.month.startDayOfWeek = options.month.startDayOfWeek ? 0 : 1;
           options.week.startDayOfWeek = options.week.startDayOfWeek ? 0 : 1;
           viewName = this.state.calendar.getViewName();
          //viewName = 'toggle-start-day-1';
          console.log(viewName);
           target.querySelector('input').checked = options.month.startDayOfWeek;
            break;
        case 'toggle-workweek':
           options.month.workweek = !options.month.workweek;
           options.week.workweek = !options.week.workweek;
           viewName = this.state.calendar.getViewName();
         // viewName = 'toggle-workweek';
          console.log(viewName);
           target.querySelector('input').checked = !options.month.workweek;
            break;
        default:
            break;
    }
    // console.log("options******",options);
    // console.log("viewName******", viewName);
    this.setoptionsandview(this.state.calendar,options,viewName,true);
    // this.setState({
    //     calendar: this.setoptionsandview(this.state.calendar,options,viewName,true)
    // });
 //  this.renderrange(this.state.calendar);
   
}
renderrange = calendar=>{
    let options = calendar.getOptions();
    let viewName = calendar.getViewName();
   var renderRange = document.getElementById('renderRange');
    //     var options = cal.getOptions();
    //     var viewName = cal.getViewName();
        var html = [];
        if (viewName === 'day') {
            html.push(moment(calendar.getDate().getTime()).format('YYYY.MM.DD'));
        } else if (viewName === 'month' &&
            (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)) {
            html.push(moment(calendar.getDate().getTime()).format('YYYY.MM'));
        } else {
            html.push(moment(calendar.getDateRangeStart().getTime()).format('YYYY.MM.DD'));
            html.push(' ~ ');
            html.push(moment(calendar.getDateRangeEnd().getTime()).format(' MM.DD'));
        }
        let temp= html.join('');
        console.log("temp", temp);
        renderRange.innerHTML =temp;
        //console.log("html.join('')",html.join(''));
        // 
        // console.log("temp", temp);
        // return {__html: temp};
        // console.log("html",html.join(''));
}
// onClickCalendar = event =>{
//  console.log("evetnt",event);

// }
// clickSchedule = event=>{
//     console.log("clickSchedule",event);
// }

// clickDayname = event=>{
//     console.log("clickDayname",event);
// }

beforeCreateSchedule=event=>{
    console.log("beforeCreateSchedule",event);
}
// beforeUpdateSchedule=event=>{
//     console.log("beforeUpdateSchedule",event);
// }
// beforeDeleteSchedule=event=>{
//     console.log("beforeDeleteSchedule",event);
// }
// afterRenderSchedule=event=>{
//     console.log("afterRenderSchedule",event);
// }
createNewSchedule = event =>{
//    this.onNewSchedule(event);
event.preventDefault();
    console.log("createNewSchedule" , event.nativeEvent);
    var start = event.start ? new Date(event.start.getTime()) : new Date();
        var end = event.end ? new Date(event.end.getTime()) : moment().add(1, 'hours').toDate();
    // var start =  new Date();
    // var end = moment().add(1, 'hours').toDate();
        if (this.state.calendar.useCreationPopup) {
            this.state.calendar.openCreationPopup({
                start: start,
                end: end
            });
        }
   

       
}
handleFormSubmit=event=>{
    event.preventDefault();
    console.log("enet in test ", event);
}
render(){
    return(
  <div className="Calendar" >
    <Changeview 
    calendarTypeName={this.state.calendarTypeName}
    onClickMenu={this.onClickMenu}
    />
    
    <ButtonCreateNewSchedule   
    createNewSchedule={this.createNewSchedule}/>
    <div id="calendar"></div>
   
   
  </div>);
}
}
  
export default Calendar;
