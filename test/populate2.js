var _User = new Schema({
  _id:Number,// 只支持ObjectId,Number,String,Buffer，就这几个引用类型，ref匹配的只有这个_id
  name:String,
  age:Number
});

var _Comment = new Schema({
  comments:[{
    text:String,
    created_by:{type:Number,ref:'User'}//这个User是model名称，数据类型要于_id的数据类型一致。
  }]
});

var userModel = mongoose.model('User', _User);
var commentsModel = mongoose.model('Comment', _Comment);

// 查询

commentsModel.findOne({ })
    .populate('comments.created_by')
    .exec(function (err, commets) {
      console.log(err,commets);
    });