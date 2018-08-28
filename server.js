var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var port = process.env.PORT || 5000;

// const test = 'some text';

// try {
//   test = 'something else';
// } catch(err) {
//   console.log('nope, can\'t do that');
// }

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// When we set defaultLayout, we need a layouts folder inside of views
// with the handlebars filename we specify --> main.handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// localhost:5000/
app.get('/', function(request, response) {
  response.render('home');
});

app.get('/api/posts', function (request, response) {
  var posts = [
    {
      title: 'My First Post',
      body: 'Beef ribs pork picanha andouille hamburger pastrami pork belly ball tip beef short loin pork chop meatball bacon ground round prosciutto. Ball tip buffalo alcatra kevin picanha bacon hamburger shoulder ground round ham hock meatloaf shankle.'
    },
    {
      title: 'My Second Post',
      body: 'Sirloin flank chuck rump pork boudin andouille ham meatloaf. Shank porchetta shoulder biltong pancetta t-bone tail landjaeger, chuck cow.'
    },
    {
      title: 'My Third Post',
      body: 'Drumstick filet mignon picanha, alcatra tenderloin bresaola hamburger tri-tip boudin tail swine pastrami ribeye.'
    }
  ];

  response.send(posts);
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

module.exports = app;