require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlLocations=require('../controller/locations')
var ctrlOthers=require('../controller/others')

router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location2',ctrlLocations.locationInfo2);
router.get('/location3',ctrlLocations.locationInfo3);
router.get('/location/review/new',ctrlLocations.addReview);

/*var homepagecontroller=function(req,res)
 {
  res.render('index', { title: "Mean class of AI-A" })
};*/
router.get('/about',ctrlOthers.about);
module.exports = router;
