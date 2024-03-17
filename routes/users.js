var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getUser', function (req, res, next) {
  res.send('My name is Suresh and location is Dhanbad');
});

//query Params
router.get('/getUserQuery', function (req, res, next) {
  const {name,loc}=req.query
  // res.send(`My name is ${req.query.name} and location is ${req.query.loc}`);
  res.send(`My name is ${name} and location is ${loc}`);
});

//params
router.get('/getUserParam/:name/:loc', function (req, res, next) {
  const {name,loc}=req.params
  // res.send(`My name is ${req.query.name} and location is ${req.query.loc}`);
  res.send(`My name is ${name} and location is ${loc}`);
});

//header
router.get('/getUserHeader', function (req, res, next) {
  const {name,loc}=req.headers
  // res.send(`My name is ${req.query.name} and location is ${req.query.loc}`);
  res.send(`My name is ${name} and location is ${loc}`);
});

//body
router.get('/getUserBody', function (req, res, next) {
  const {name,loc}=req.body
  // res.send(`My name is ${req.query.name} and location is ${req.query.loc}`);
  res.send(`My name is ${name} and location is ${loc}`);
});

module.exports = router;
