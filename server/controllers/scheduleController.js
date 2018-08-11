const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    // db.Schedule
    //   .find(req.query)
    //   .sort({ start: +1 })
    //   .then(dbSchedule => res.json(dbSchedule))
    //   .catch(err => res.status(422).json(err));


      db.Schedule.find({})
    .populate({path: "calendar"}).sort({ start: +1 })
    .then(dbSchedule => res.json(dbSchedule))
    .catch(err => res.status(422).json(err));
    // .exec(function(err, data) {
    //     if(data){
    //                 console.log(data);
    //                res.render('saved', {
    //                 layout: 'main',
    //                 headline:data
    //               });
    //                //res.json(data);{headline:data}
    //             }
    // });
  },
  findById: function(req, res) {
    db.Schedule
      .findById(req.params.id)
      .then(dbSchedule => res.json(dbSchedule))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
   // console.log("schedule***", req.body);
    const schedule = {
        //id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        dueDateClass: req.body.dueDateClass,
        start:req.body.start,
        end:req.body.end,
        location: req.body.location,
        calendar:req.body.calendar
    };
    //console.log("schedule***", req.body);
    db.Schedule
      .create(schedule)
      .then(dbSchedule => res.json(dbSchedule))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) { 
  //   console.log("CONTROLLER",req.body.params);
  //  console.log("CONTROLLER",req.params.id);
    let obj={
     // _id:req.body.id,
      title: req.body.params.title,
      // category: params.category,
      // dueDateClass: params.dueDateClass,
      start:req.body.params.start._date,
      end:req.body.params.end._date,
      location: req.body.params.location,
      // calendar:params.calendar
  }
  // console.log("obj",obj);
  // console.log("obj.title",obj.title);
  // console.log("obj.start._date",obj.start._date);
  // console.log("obj.end._date",obj.end._date);
    db.Schedule
      .findByIdAndUpdate(req.params.id, obj)
      .then(dbSchedule => res.json(dbSchedule))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    // console.log("req.params",req.params);
    db.Schedule
      .findByIdAndRemove({ _id: req.params.id })
     // .then(dbSchedule => dbSchedule.remove())
      .then(dbSchedule => res.json(dbSchedule))
      .catch(err => res.status(422).json(err));
  }
};
