var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_sam1'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/brandData",function (req,res) {
	// body...
	conn.query("select * from brands",function (err,results) {
		// body...
		if(err){
			console.log(err)
		}
		else{
			// console.log(results)
			res.send(results)
		}
	})
	// res.send("hello")
})
router.get("/catgoryData",function (req,res) {
	// body...
	conn.query("select * from category",function (err,results) {
		// body...
		if(err){
			console.log(err)
		}
		else{
			// console.log(results)
			res.send(results)
		}
	})
	// res.send("hello")
})

router.get("/category",function (req,res) {
	// body...
	res.render("category_view")
})

router.post("/categoryAction",function (req,res) {
	// body...
	// console.log(req.body)
	data = req.body.xyz;
	conn.query("INSERT into  category (catname) values ('"+data+"')",function (err,results) {
		// body...
		if(err){
			console.log(err)
		}
		else{
			// console.log(results)
			res.send("record added")
		}
	})
})

module.exports = router;
