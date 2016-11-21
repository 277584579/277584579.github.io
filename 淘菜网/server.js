var express = require("express");

var app = express();

app.use(express.static("www"));

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/TaoCaiWang");

mongoose.connection
.on("open",function(){
	console.log("数据库连接成功");
})
.on("error",function(){
	console.log("数据库连接失败");
});

// 创建表模板
var taskSchema = mongoose.Schema({
	name:String,
	email:String,
	psw:String,
	repeat:String,
	code:String
});

var Task = mongoose.model("tasks",taskSchema);












//登录接口
app.get("/seek",function(req,res){
	console.log(req.query)

	
//		生成touken的函数
	function makeToken(){
		var sourceStr = "123457890asdfghjklzxcvbnm";
		var token = "";
		for (var i = 0;i<10;i++) {
			token += sourceStr[Math.floor(Math.random()*sourceStr.length)];
		}
		return token;
	}


	var condition = {};
	
	if(req.query.name){
		var reg = new RegExp(req.query.name);
		condition.name = reg;
	}
	
	if(req.query.psw){
		var reg = new RegExp(req.query.psw);
		condition.psw = reg;
	}
	//查找
	Task.find(condition)
	.count()
	.exec(function(err,data){
		if(data<=0){
    		res.json({err:1,msg:'该用户不存在'});
    	}else{
    		console.log(data);
//		登录成功，先生成token
		var token = makeToken();
//		通过cookie把token发给客户端。
//		 res.cookie(name,value)
		res.cookie("token",token);
		res.cookie("name",req.query.name);
		res.json({err:0,msg:'登录成功'});
 		}
    	})
		

});






//注册接口(判断用户是否已经注册)
app.post("/add",function(req,res){
	console.log(req.body)
	var t = new Task(req.body);
	 
	Task.find({name:req.body.name})
    .count()
    .exec(function(err,data){
    	if(data>0){
    		res.send({err:1,msg:'该用户名已经占用'})
    	}else{
    		var t = new Task({
    			name:req.body.name,
    			email:req.body.email,
	            psw:req.body.psw,
	            repeat:req.body.repeat,
	            code:req.body.code,
    		})
    		
    		//保存到数据库
	           t.save(function(err,data){
		             res.json({err:0,msg:"恭喜你注册成功"});
	             }).catch(function(err) {
                     res.json({err:2, msg: '服务器繁忙，请稍后再试....'})
                 })
    	}
    })
	
});




app.listen(8080,function(){
	console.log("服务器已开启");
});


