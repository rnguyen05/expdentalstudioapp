const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");

// Matches with "/api/calendar"



  //.route("/")router.get("/",scheduleController.findAll);
  //router.get("/calendar",(req,res)=>calendarController.findAll(req,res));
  router.post("/",calendarController.create);
  router.get("/",calendarController.findAll);
//   .put(articleController.update)
//   .delete(articleController.remove);
module.exports = router;


