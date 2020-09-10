const mongoose = require("mongoose");

const academicSettingSchema = mongoose.Schema({
    settings_id: mongoose.Schema.Types.ObjectId,
    type: String,
    description: String
});

module.exports = mongoose.model("AcademicSetting",academicSettingSchema);