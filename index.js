// mongod --dbpath E:\00_project\01_node\mong\db
var mongoose = require("mongoose");
// 连接数据库
var db = mongoose.connect("mongodb://127.0.0.1:27017/test");

///   Schema  用来定义数据模型

var tschema = new mongoose.Schema({
  name : { type:String },
  age  : { type:Number, default:18 },
  gender : { type:Boolean, default:true },
  time : { type:Number, default:Date.now },
  email : { type:String }
});

var TestSchema= db.model("someOne", tschema);


// 创建数据，因为上面的函数查询到是28所以这里添加的查不到，而且这里如果年龄变了，哪里也查不到。



const childChildSchema = new mongoose.Schema({
  PlayerID: Number,
  Msg: String,
  Time: Date
});
const childSchema = new mongoose.Schema({
  PlayerID: Number,
  ReadLast: Date,
  List: [childChildSchema]
});
const parentSchema = new mongoose.Schema({
  ID: Number,
  List: [childSchema]
});

var someSchema= db.model("someSchema", parentSchema);

someSchema.create({
  List : [{PlayerID: 42342, List: {Msg:'fdsafsa'}}]
},function(error,doc){
  console.log(doc);
});

// find的collback函数有两个值，一个是错误，一个是值
someSchema.find({}, function (error, docs) {
  if(error){
    console.log("error :" + error);
  }else{
    console.log('someSchema'); //docs: age为28的所有文档
    console.log(docs); //docs: age为28的所有文档
  }
});


db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("------数据库连接成功！------");
});


///     forever  nodemon