const orm = require('./../config/orm.js');


exports.addBurger = function(burgerName) {
  orm.insertOne(burgerName);
};

exports.devourBurger = function() {
  // body...
}
//when user clicks devour
//run orm.updateOne(burgerClicked, 1);
//update page

exports.getBurgers = function(cb) {
  // body...
  orm.selectAll(function(res){
    cb(res);
  });
};
