var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticalOne = {
        title: 'Artical One | Pritesh Bakale',
        heading: 'Artical One',
        date: 'Sep 5, 2016',
        content: `
                         <p>
                                This is thhe content for my first artical. This is$
                        </p>

                         <p>
$r my first artical. This is thhe content for my first artical..
                        </p>

                         <p>
$r my first artical. This is thhe content for my first artical..
                        </p>`

};

function createTemplate (data) {
var title = data.title;
var heading = data.heading;
var content = data.content;
var htmlTemplate = `
<html>
        <head>
                <title>
                ${title}
                </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
 </head>
        <body>
        <div class="container">
                <div>
                        <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                       ${heading}
                </h3>

                <div>
                       ${content}
                </div>
        </div>
        </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function (req, res) {
  res.send(createTemplate(articalOne));
});

app.get('/artical-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/artical-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});


app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8081; // Use 8080 for local development because you might already have apache running on 80
app.listen(8081, function () {
  console.log('IMAD course app listening on port ${port}!');
});
