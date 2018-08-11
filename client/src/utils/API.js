import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets all calendars from the DB
  getCalendarList: function() {
    console.log("inside getCalendarList");
    return axios.get("/api/calendar");
    // .then(response => { 
    //     console.log("calendars*****",response)
    // })
    // .catch(error => {
    //     console.log(error)
    // });
  },
  createCalendar: function(params){
      console.log("inside create calendar");
      return axios.post("/api/calendar",params)
      .then(response => { 
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    });
  },
  createSchedule: function(params){
      console.log("inside create schedule");
      console.log("schedule",params)
      return axios.post("/api/schedule",params)
      .then(response => { 
        console.log("schedule",response);
    })
    .catch(error => {
        console.log(error)
    });

  },
  findAllSchedules: function(){
    return axios.get("/api/schedule");
// axios.get("/api/schedule")
//       .then(response => { 
//         console.log("schedule find all",response);
//         return response;
//     })
//     .catch(error => {
//         console.log(error)
//     });;
  },
  updateSchedule: function(params){
    console.log("params",params);
    console.log("id",params._id);
    let id = params._id;
    let obj={
        //id:id,
        title: params.title,
        // category: params.category,
        // dueDateClass: params.dueDateClass,
        start:params.start,
        end:params.end,
        location: params.location,
        // calendar:params.calendar
    }
    return axios.put("/api/schedule/"+id , {params:obj})
    .then(response => { 
        console.log("schedule",response);
    })
    .catch(error => {
        console.log(error)
    });
  },
  deleteSchedule: function(id){
      console.log("id",id);
      return axios.delete("/api/schedule/"+id)
      .then(response => { 
        console.log("schedule",response);
    })
    .catch(error => {
        console.log(error)
    });

  }
  
};
