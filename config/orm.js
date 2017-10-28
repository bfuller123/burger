const db = require('./connection.js');

const userConnection = db;

function connectUser(){
  userConnection.connect(function(err){
    if(err) throw err;
    console.log('Connected!');
  })
}

connectUser();


//exports
module.exports.selectAll = function(){
  userConnection.query('SELECT * FROM burgers_db.burgers', function(err, res){
    console.log(res);
  })
}

module.exports.insertOne = function(burgerName){
  userConnection.query(`INSERT INTO burgers_db.burgers (burger_name, devoured) VALUES ('${burgerName}', 0)`), function(err, res){
    console.log(`${burgerName} added`);
  }
}

module.exports.updateOne = function(burgerName, devourNum){
  userConnection.query(`UPDATE burgers_db.burgers SET devoured = ${devourNum} WHERE burger_name = '${burgerName}'`, function(err, res){
    console.log(`${burgerName} was devoured!`);
  });
}
