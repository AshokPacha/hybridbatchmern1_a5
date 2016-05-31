var express = require('express');
var path = require('path');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var app=express();

app.get('/', function(req, res){res.send('Hello');});

app.use(express.static(path.join(__dirname,"public")));

app.get('/getJSON', function(req,res){
  console.log("inside get json");
  var content=fs.readFileSync('./public/mymovies.json');
  res.json(content.toString());
});

app.post('/update', function (request, response) {
  console.log("In update");
  var reqData = "";
  var content = JSON.parse(fs.readFileSync('./public/mymovies.json'));


  request.on('data', function (data) {
    reqData += data;
    console.log(data);
  });

  request.on('end', function (data) {
    console.log(reqData);
    var parseData = querystring.parse(reqData);
    console.log(parseData);

    for (var k = 0; k < content.length; k++) {
      if(parseData.Title == content[k].Title)
      {
        //console.log('value of k is : '+k);
        content[k].Plot = parseData.updPlot;
        content[k].imdbRating = parseData.updRating;
        content[k].Awards = parseData.updAwards;
        content[k].Poster = "images/" + parseData.imageURL;
      }
    }

    console.log(content);
    fs.writeFile('./public/mymovies.json', JSON.stringify(content), function (err) {
      if(err){
        console.log(err);
      }
      else {
        console.log('Updated Successfully');
      }
    });
  });

  response.sendFile(path.join(__dirname, './public/index.html'));
});


app.post('/delete', function (request, response) {
  console.log('In delete');
  var content = JSON.parse(fs.readFileSync('./public/mymovies.json'));
  var reqData = "";

  request.on('data', function (data) {
    reqData += data;
  });

  request.on('end', function (data) {
    var parseData = querystring.parse(reqData);

    for (var k = 0; k < content.length; k++) {
      if(parseData.Title == content[k].Title)
      {
        content[k] = content[content.length - 1];
        content.length = content.length - 1;
      }
    }

    fs.writeFile('./public/mymovies.json', JSON.stringify(content), function (err) {
      if(err){
        console.log(err);
      }
      else {
        console.log('Deleted Successfully');
      }
    });

  });

  response.sendFile(path.join(__dirname, './public/index.html'));

});


app.post('/add', function (request, response) {
  console.log('In add');
  var reqData = "";
  var content = JSON.parse(fs.readFileSync('./public/mymovies.json'));

  request.on('data', function (data) {
    reqData += data;
  });

  request.on('end', function (data) {
    var obj = {};
    var parseData = querystring.parse(reqData);
    obj.Title = parseData.Title;
    obj.Year = parseData.Year;
    obj.Actors = parseData.Actors;
    obj.Director = parseData.Director;
    obj.Released = parseData.Released;
    obj.Plot = parseData.Plot;
    obj.imdbRating = parseData.Rating;
    obj.Awards = parseData.Awards;
    obj.Poster = "images/" + parseData.imageurl;

    content.push(obj);

    fs.writeFile('./public/mymovies.json', JSON.stringify(content), function (err) {
      if(err){
        console.log(err);
      }
      else {
        console.log('Added Successfully');
      }
    });
  });

  response.sendFile(path.join(__dirname, './public/index.html'));

});


app.listen(8080, function () {
  console.log("Serving at 8080 ");
});
