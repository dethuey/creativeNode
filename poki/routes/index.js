var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});
var pokemon = [{
    avatarUrl: 'Don\'t interrupt someone working intently on a puzzle. Chances are, you\'ll hear some crosswords.'
  },
  {
    avatarUrl: 'Q. Why was King Arthur\'s army too tired to fight? A. It had too many sleepless knights.'

  },
  {
    avatarUrl: 'I was going to make myself a belt made out of watches, but then I realized it would be a waist of time.'
  }
];

router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
  res.send(pokemon);
});

router.get('/', function(req, res) {
  console.log("In Pokemon");
  res.send(pokemon);
});

router.post('/pokemon', function(req, res) {
  console.log("In Pokemon Post");
  console.log(req.body);
  pokemon.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.delete('/pokemon', function(req, res) {
  console.log("In Pokemon Delete");
  pokemon.remove({ avatarUrl: req.pokemon }, function(err) {
    if (!err) {
      console.log("Item deleted!");
    }
    else {
      console.log("Item not deleted!");
    }
  });
});

module.exports = router;
//module.exports.delete = del;

/*
apiRouter.delete(/users/:user_id', function(req, res) {

    User.Remove({ id: req.params.user_id }, function(err) {
        if (!err) {
            return res.send('User deleted!');
        } else {
            return res.send('Error deleting user!');
        }
    });

});
*/