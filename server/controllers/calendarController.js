const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Calendar
      .find(req.query)
      .sort({ id: +1 })
      .then(dbCalendar => res.json(dbCalendar))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {

    db.dbCalendar
      .findById(req.params.id)
      .then(dbCalendar => res.json(dbCalendar))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body create calendar",req.body);
    //     .catch(err => res.status(422).json(err));;
    const calendar = {
        // id: req.body.id,
        name: req.body.name,
        checked: req.body.checked,
        dragBgColor:req.body.dragBgColor,
        color: req.body.color,
        bgColor: req.body.bgColor,
        borderColor: req.body.borderColor
     // _id: req.body._id,
     // title: req.body.headline.main,
     // url: req.body.web_url
    };
    db.Calendar
      .create(calendar)
      .then(dbCalendar => res.json(dbCalendar))
      .catch(err => res.status(422).json(err));
  }
//   ,
//   update: function(req, res) {
//     db.Article
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbArticle => res.json(dbArticle))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Article
//       .findById({ _id: req.params.id })
//       .then(dbArticle => dbArticle.remove())
//       .then(dbArticle => res.json(dbArticle))
//       .catch(err => res.status(422).json(err));
//   }
};
