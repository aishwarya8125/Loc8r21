/*home page*/
module.exports.homelist=function(req,res){
    res.render('locations-list',{title:'Home'});
};

/*locationinfo page*/
module.exports.locationInfo=function(req,res){
    res.render('location-info',{title:'Location info'});
};
module.exports.locationInfo3=function(req,res){
    res.render('location-info3',{title:'Location info'});
};
module.exports.locationInfo2=function(req,res){
    res.render('location-info2',{title:'Location info'});
};


/*add review*/
module.exports.addReview=function(req,res){
    res.render('location-review-form',{title:'Add review'});
};