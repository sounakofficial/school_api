// loading environment variables
if(process.env.NODE_ENV === 'production'){
    require("dotenv").config({'path': './environments/production.env'});
}
else{
    require("dotenv").config({'path': './environments/development.env'});
}



// Imports
const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Environment variable
const PORT = process.env.PORT ?? 4000;

// Database connection establishment
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// CORS headers
app.use(cors());
app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());
app.use(morgan('dev'));



// app.use('/',(req,res,next) => {
//     res.status(200).json({
//         messege:"works"
//     });
// });

// Route Controllers imports
const AcademicSettingRoutes = require('./api/routes/academic_settingsRoute')


// Routes Handled
app.use('/academic_setting',AcademicSettingRoutes);


// Server start
app.listen(PORT,()=>{
    console.log(`server running at: ${PORT}`)
})