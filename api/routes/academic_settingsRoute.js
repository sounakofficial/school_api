const router = require("express").Router();
const mongoose = require("mongoose");


const AcademicSetting = require('../models/academic_setting');


router.get('/:settingID',(req, res, next) => {
    const id = req.params.settingID
    AcademicSetting.findById(id).select('_id settings_id type description')
                                .exec()
                                .then(doc => {
                                    console.log(doc);
                                    res.status(200).json(doc);
                                })
                                .catch(err => {
                                    console.log(err);
                                    res.status(500).json({
                                        error: err
                                    })
                                })
})


router.post('/',(req, res, next) => {
    const academicSetting = new AcademicSetting({
        settings_id: new mongoose.Types.ObjectId(),
        type: req.body.type,
        description: req.body.description
    });

    academicSetting.save()
                   .then(result => {
                       console.log(result);
                       res.status(201).json({
                            messege:"handling academic setting post setting",
                            setting: result
                    });
                   })
                   .catch(err => {
                       console.log(err);
                       res.status(500).json({
                           error:err
                       });

                   });
})


module.exports = router;