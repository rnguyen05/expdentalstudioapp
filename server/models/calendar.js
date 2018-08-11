const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
     //id: { type: Schema.Types.ObjectId, required: true },
    name: {type: String, required: true},
    checked: { type: Boolean, default: true },
    color: { type: String,default: '#ffffff' },
    bgColor: {   type: String,default:'#9e5fff'},
    borderColor: {type: String,default:'#9e5fff'},
    dragBgColor: {type: String,default:'#9e5fff'},
    schedules:[{
        type: Schema.Types.ObjectId, 
        ref: "Schedule"  
    }]
}, );

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;
