const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchems = new Schema({
    // id: { type: Schema.Types.ObjectId, required: true},
    title: {type: String, required: false},
    category: {type: String,default: 'time'},
    dueDateClass: {type: String,default: ''},
    start:{type: Date, default: Date.now},
    end:{type: Date, default: Date.now},
    location:{type: String, required: false},
    calendar:{
        type: Schema.Types.ObjectId, 
        ref: "Calendar"  
    }
    

}, );

const Schedule = mongoose.model("Schedule", scheduleSchems);

module.exports = Schedule;
