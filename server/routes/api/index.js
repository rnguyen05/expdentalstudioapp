const router = require("express").Router();
const calendarRoutes = require("./calendar");
const scheduleRoutes = require("./schedule");
const userRoutes = require("./user");

// calendar routes
router.use("/calendar", calendarRoutes);
router.use("/schedule", scheduleRoutes);
router.use("/user", userRoutes);

module.exports = router;
