import React, {Component} from "react";
import tuiCalendar from 'tui-calendar'; 
import Changeview from './Changeview/Changeview';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ButtonCreateNewSchedule from './ButtonCreateNewSchedule/ButtonCreateNewSchedule';
import CalendarList from './CalendarList/CalendarList';
// import Renderrange from './Renderrange/Renderrange'
import moment from 'moment';
import chance from 'chance';
import {Container, Row, Col} from 'reactstrap';
import API from '../../utils/API';
import "./css/Calendar.css";



class Calendar extends Component {
    state = {
      calendarTypeName:'week',  
      click:"",   
      scheduleList:[],
      buttonId:"", 
      calendarList:[],
      today: new Date(),
      selectedCalendar:'',
      calendar: new tuiCalendar(document.getElementById('calendar'), 
      {
          defaultView: 'week',
          taskView: true,    // can be also ['milestone', 'task']
          scheduleView: true,  // can be also ['allday', 'time']
          useCreationPopup: true,
          useDetailPopup: true,
          calendars:this.calendarList,
          ScheduleCreationPopup: true,
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
                   //return getTimeTemplate(schedule, true);
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
  
    };
  
   getCalendarList =()=>{
      API.getCalendarList()
          .then(res =>
            this.setState({
              calendarList: res.data
            })
          )
          .catch(err => console.log(err));
   }
  makeScheduleArrayReady = schedulesArr =>{
      console.log("inside makeScheduleArrayReady",schedulesArr);
     
     // console.log("inside makeScheduleArrayReady",schedulesArr);
      const readySchedulesArr =[];
     // for(let i=0;i<schedulesArr.length;i++){
          // console.log("inside  FOR LOOP IN makeScheduleArrayReady");
          // let tempElement = {
          //     id:schedulesArr[i]._id,
          //     calendarId: schedulesArr[i].calendar,
          //     title: schedulesArr[i].title,
          //     category: schedulesArr[i].category,
          //     dueDateClass: '',
          //     start: schedulesArr[i].start,
          //     end: schedulesArr[i].end
          // };
         // console.log("tempElement",schedulesArr[i]);
          //readySchedulesArr.push(tempElement);
      // }
      // const listItems = schedulesArr.map((d) => console.log("d",d));
      console.log("inside makeScheduleArrayReady",schedulesArr);
      for (var key in schedulesArr) {
          //arr.push(myObject[key]);
          console.log("element",schedulesArr[key].title);
        }
        console.log("inside makeScheduleArrayReady",schedulesArr);
      schedulesArr.forEach( (element) => 
          console.log("element",element)
          // let id=1;
          // let tempElement = {
          //     id:element._id,
          //     calendarId: element.calendar._id,
          //     title: element.title,
          //     category: element.category,
          //     dueDateClass: '',
          //     start: element.start,
          //     end: element.end
          // };
          // readySchedulesArr.push(tempElement);
        );
        return readySchedulesArr;
  
  }
   createSchedule= (calendar)=>{
     
      var flag=false;
      var schedulesArr=new Array();
   console.log("API.findAllSchedules()",API.findAllSchedules()) ;
   let scheduleList= API.findAllSchedules()
    .then(res=>{
         console.log("res.data",res.data) ; 
        
         for(let i=0;i<res.data.length;i++){
          
              let element = res.data[i];
              console.log("element",element);
          
              this.state.calendar.createSchedules([{
                  id: element._id,
                  calendarId: element.calendar._id,
                  title: element.title,
                  // isAllDay: isAllDay,
                  start: element.start,
                  end:  element.end,
                  location: element.location,
                  category:  'time',
                  dueDateClass: '',
             
          }]);
              
         }
      
      });
     this.setState({scheduleList: scheduleList});
    
    }
    getAllCalendars=()=>{
      // console.log) 
      let arr=[];
      API.getCalendarList()
      .then(res =>{ 
          console.log("calendars",res); 
          
          res.data.map((element,index)=>{
             
              let tempCals = {
              id: element._id,
              name: element.name,
              checked: element.checked,
              color: element.color,
              bgColor: element.bgColor,
              borderColor: element.borderColor
              };
              arr.push(tempCals);
          });
          
         console.log("arr",arr);
          this.setState({calendarList:arr})
      }
         
        )
        .catch(err => console.log(err));
       
     }
      
      componentDidMount(){
         // this.getAllCalendars();
          // API.createSchedule({
              
          // calendar: '5b63c5ac396f5540ec23a1a4',
          // title: 'my schedule',
          // category: 'time',
          // dueDateClass: '',
          // location:'',
          // start: '2018-08-03T22:30:00+09:00',
          // end: '2018-08-04T02:30:00+09:00'
          // });
          // API.createSchedule({
              
          // calendar: '5b63c5ac396f5540ec23a1a4',
          // title: 'my 2 schedule',
          // category: 'time',
          // dueDateClass: '',
          // location:'',
          // start: '2018-08-02T22:30:00+09:00',
          // end: '2018-08-03T02:30:00+09:00'
          // });
          API.createCalendar({

            name: "my calendar",
            color: '#ffffff',
            bgColor: '#00a9ff',
            borderColor: '#00a9ff',
            dragBgColor: '#00a9ff'
        
          });
          API.createCalendar({

            name: "Family",
            color: '#ff5583',
            bgColor: '#ff5583',
            borderColor: '#ff5583',
            dragBgColor: '#ff5583'
        
          });
        this.createSchedule(this.state.calendar);
        this.getAllCalendars();
       $('#btn-save-schedule').on('click', this.onNewSchedule);
  
       this.state.calendar.on('beforeCreateSchedule',this.beforeCreateSchedule);
       this.state.calendar.on('clickDayname',this.clickDayname);
       this.state.calendar.on('clickSchedule',this.clickSchedule);
       this.state.calendar.on('beforeUpdateSchedule',this.beforeUpdateSchedule);
       this.state.calendar.on('beforeDeleteSchedule',this.beforeDeleteSchedule);
       
      };
    
      setoptionsandview = (calendar,options,viewName,flag)=>{
           
        if(options){
           this.state.calendar.setOptions(options,true);
         
            console.log("insetoption function",options);
           } ;
      
  
         this.state.calendar.changeView(viewName,true);
         console.log("in changeView function",viewName);
         console.log("insetoption function******", this.state.calendar);
     
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
      var title = event.schedule.title;
      this.state.calendar.updateSchedule(schedule.id, schedule.calendarId, {
          start: startTime,
          end: endTime,
          location: location,
          title: title
      });
      // id: element._id,
      // calendarId: element.calendar._id,
      // title: element.title,
      // // isAllDay: isAllDay,
      // start: element.start,
      // end:  element.end,
      // category:  'time',
      // dueDateClass: '',
      console.log("schedule inside beforeUpdateSchedule",schedule);
      console.log("title inside beforeUpdateSchedule",title);
      console.log("endTime inside beforeUpdateSchedule",endTime);
      console.log("endTime inside beforeUpdateSchedule",endTime);
      console.log("location inside beforeUpdateSchedule",location);
      API.updateSchedule({
              _id:schedule.id,
             // calendarId: schedule.calendarId,
              title: title,
              start: startTime,
              end: endTime,
              location: location
          });
  
     this.loadScheduleList();
      //***************************** */
          // let scheduleList= API.findAllSchedules()
          // .then(res=>{
          //      console.log("res.data",res.data) ; 
              
          //      for(let i=0;i<res.data.length;i++){
                
          //           let element = res.data[i];
          //           this.state.calendar.createSchedules([{
          //               id: element._id,
          //               calendarId: element.calendar._id,
          //               title: element.title,
          //               // isAllDay: isAllDay,
          //               start: element.start,
          //               end:  element.end,
          //               location: element.location,
          //               category:  'time',
          //               dueDateClass: '',
                   
          //       }]);
                    
          //      }
            
          //   });
          //  this.setState({scheduleList: scheduleList});
  
  //******************************** */
  
      // console.log("schedule inside beforeUpdateSchedule",schedule);
      // console.log("startTime inside beforeUpdateSchedule",startTime.toDate());
      // console.log("startTime inside beforeUpdateSchedule",startTime._date.toDateString());
      // console.log("startTime inside beforeUpdateSchedule",startTime._date.toString());
      // console.log("startTime inside beforeUpdateSchedule",startTime.getTime());
      // console.log("startTime inside beforeUpdateSchedule",startTime._date.toDateString());
     // console.log("endTime inside beforeUpdateSchedule",endTime.toString());
    // this.createSchedule(this.state.calendar);
  //   this.loadScheduleList
      // this.state.calendar.render();
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
        var calendar = this.state.selectedCalendar ? this.state.selectedCalendar : this.state.calendarList[0];
  
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
      console.log("target.value",this.getValue(target));
      var action = this.getDataAction(target);
      console.log("action",action);
   this.setState({value:this.getValue(target)});
   console.log("this.state.value==>",this.state.value);
    var options = this.state.calendar.getOptions();
      var viewName = '';
      console.log("options",options);
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
      console.log("options******",options);
      console.log("viewName******", viewName);
      this.setoptionsandview(this.state.calendar,options,viewName,true);
      // this.setState({
      //     calendar: this.setoptionsandview(this.state.calendar,options,viewName,true)
      // });
   //  this.renderrange(this.state.calendar);
     
  }
  
  beforeDeleteSchedule=event=>{
      console.log("event beforeDeleteSchedule",event);
      API.deleteSchedule(event.schedule.id);
      this.state.calendar.deleteSchedule(event.schedule.id,event.schedule.calendarId);
      this.state.calendar.render('immediately');
      //this.loadScheduleList();
  
  }
  
  beforeCreateSchedule=event=>{
    console.log("beforeCreateSchedule",event);
    let temp={
      calendar: '5b63c5ac396f5540ec23a1a4',
      title: event.title,
      category: 'time',
      dueDateClass: '',
      location:event.location,
      start: event.start,
      end: event.end
    };
    console.log("temp",temp);
    API.createSchedule({
      calendar: '5b63c5ac396f5540ec23a1a4',
      title: event.title,
      category: 'time',
      dueDateClass: '',
      location:event.location,
      start: event.start._date,
      end: event.end._date
    });
    this.loadScheduleList();
  
  }
      //   {      
      // calendar: '5b63c5ac396f5540ec23a1a4',
      // title: 'my schedule',
      // category: 'time',
      // dueDateClass: '',
      // location:'',
      // start: '2018-08-03T22:30:00+09:00',
      // end: '2018-08-04T02:30:00+09:00'
      // });
  // }
  
  createNewSchedule = event =>{
  
    event.preventDefault();
    console.log("createNewSchedule" , event.nativeEvent);
    var start = event.start ? new Date(event.start.getTime()) : new Date();
    var end = event.end ? new Date(event.end.getTime()) : moment().add(1, 'hours').toDate();
    if (this.state.calendar.useCreationPopup) {
      this.state.calendar.openCreationPopup({
          start: start,
          end: end
      });
    }    
  }
  loadScheduleList= ()=>{
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$inside loadScheduleList");
      this.state.calendar.clear();
   API.findAllSchedules()
    .then(res=>{
         console.log("res.data",res.data) ; 
        this.setState({scheduleList:res.data});
         for(let i=0;i<res.data.length;i++){
          
              let element = res.data[i];
              console.log("element",element);
          
              this.state.calendar.createSchedules([{
                  id: element._id,
                  calendarId: element.calendar._id,
                  title: element.title,
                  // isAllDay: isAllDay,
                  start: element.start,
                  end:  element.end,
                  location: element.location,
                  category:  'time',
                  dueDateClass: '',
             
          }]);
              
         }
      
      });
  
  
    //  this.state.calendar.render();
  }
  
  handleFormSubmit=event=>{
    event.preventDefault();
    console.log("enet in test ", event);
  }
  
  onChangeCalendars = event=>{
      console.log("CALENDAR CALENDAR CHANGE",event);
      console.log("CALENDAR CALENDAR CHANGE",event.target.value);
      console.log("CALENDAR CALENDAR checked",event.target.checked);
      var calendarId = event.target.value;
      var checked = event.target.checked;
      console.log("CALENDAR CALENDAR checked",checked);
      var viewAll = document.querySelector('.lnb-calendars-item input');
      var calendarElements = Array.prototype.slice.call(document.querySelectorAll('#calendarList input'));
      var allCheckedCalendars = true;
  
      if (calendarId === 'all') {
          allCheckedCalendars = checked;
  
          calendarElements.forEach(function(input) {
              var span = input.parentNode;
              input.checked = checked;
              span.style.backgroundColor = checked ? span.style.borderColor : 'transparent';
          });
  
          this.state.calendarList.forEach(function(calendar) {
              calendar.checked = checked;
          });
      } else {
         // this.findCalendar(calendarId).checked = checked;
          let calListTemp = this.state.calendarList;
          let index = this.findCalendar(calendarId);
          console.log("index",index);
          calListTemp[index].checked =checked;
          console.log("calListTemp",calListTemp);
          this.setState({calendarList: calListTemp});
          console.log("calendarList",this.state.calendarList);
          console.log("INSIDE ",calendarId);
          allCheckedCalendars = calendarElements.every(function(input) {
              // let tempCal = 
              // this.setState({});
              return input.checked;
          });
  
          if (allCheckedCalendars) {
              viewAll.checked = true;
          } else {
              viewAll.checked = false;
          }
      }
  }
  
  findCalendar = id=> {
      var found;
      var index=0;
      this.state.calendarList.forEach(function(calendar,i) {
          if (calendar.id === id) {
              found = calendar;
              index=i;
          }
      });
  
      return index;
  }
    render() {
      return (
          <Row>
              <Row>deasda</Row>
              <CalendarList
                  calendarList={this.state.calendarList}
                  onChangeCalendars={this.onChangeCalendars} />
              <Changeview
                  calendarTypeName={this.state.calendarTypeName}
                  onClickMenu={this.onClickMenu}
              />
              <Container>
                  <Row>
                      <CalendarItem calendar={this.state.calendar}
                          scheduleList={this.state.scheduleList}
                          loadScheduleList={this.loadScheduleList} />
                  </Row>
              </Container>

          </Row>
  
  
      //     <Container className="col-12">
              
      //             <Col className="col-2">
      //                 <CalendarList 
      //                 calendarList = {this.state.calendarList}
                    
                     
      //                 />        
      //             </Col>
      //             <Col className="col-8">
      //             <Row>
      //                     {/* <CalendarList 
      //                     showCalendars={this.showCalendars}/> */}
      //                     <Changeview 
      //                     calendarTypeName={this.state.calendarTypeName}
      //                     onClickMenu={this.onClickMenu}
      //                     />
      //              </Row>
      //              <Row>       
      //                     <ButtonCreateNewSchedule   
      //                     createNewSchedule={this.createNewSchedule}/>
      //                     {/* <div id="calendar"></div> */}
      //                     <CalendarItem calendar={this.state.calendar}  
      //                     scheduleList={this.state.scheduleList} 
      //                     loadScheduleList={this.loadScheduleList}/>          
                     
      //             </Row>
      //             </Col>
              
        
      // </Container>
      );
    }
  }
  
  export default Calendar;