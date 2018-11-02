var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});
var pokemon = [{
    avatarUrl: 'How many computer programmers does it take to change a light bulb? None, that\'s a hardware problem.'
  },
  {
    avatarUrl: 'A programmer is at work when his wife calls and asks him to go to the store. She says she needs a gallon of milk, and if they have fresh eggs, buy a dozen. He comes home with 12 gallons of milk.'

  },
  {
    avatarUrl: 'Q. What do you call 8 Hobbits? A. A Hobbyte.'
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
  pokemon.delete({ avatarUrl: req.pokemon }, function(err) {
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