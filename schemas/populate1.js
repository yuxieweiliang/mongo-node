import mongoose, { Schema } from 'mongoose';
let db = mongoose.connect('mongodb://127.0.0.1:27017/populate');
let { model } = db;

let UserSchema = new Schema({
  bookId: {type: Schema.Types.ObjectId, ref: 'book'},
  name: String,
  introduce: String,
  age: Number,
  id: Schema.Types.ObjectId
});
let user = model('User', UserSchema);

let BookSchema = new Schema({
  name: String,
  picId: {type: Schema.Types.ObjectId, ref: 'pic'}

});
let book = model('book', BookSchema);

let PicSchema = new Schema({
  url: String,
  name: String,
  size: Object
});
let pic = model('pic', PicSchema);



/*

user.create([{name: '云若风生', age: 30},{name: '雨歇微凉', age: 20}], function(err, docs) {
  // console.log('user',docs);
  book.create([{name: '冰与火之歌'}, {name: '倾仙'}, {name: '绝世'}], function(err, docs){
    // console.log('book', docs);
    pic.create([
      {url: 'fdsa/ff/aa', name: 'MM', size: {width: 100, height: 100}},
      {url: 'fdsa/ff/bb', name: 'MM', size: {width: 100, height: 100}},
      {url: 'fdsa/ff/cc', name: 'MM', size: {width: 100, height: 100}}
    ], function(err, docs) {
      // console.log('pic', docs)
    })
  })
});
*/

user.find({name: '雨歇微凉'}).populate('bookId.name').exec(function(err, doc) {

  console.log(doc);
});
/*book.find({}, function(err, docs) {
  console.log('book:',docs);
  console.log('book:',docs.length)
});
pic.find({}, function(err, docs) {
  console.log('pic:',docs);
  console.log('pic:',docs.length)
});*/
/*
user.remove({}, function() {
});
book.remove({}, function() {
});
pic.remove({}, function() {
});
*/


/*user.findOne({name: '云若风生'}).exec(function(err, docs) {
 //console.log(docs)

 if(!err) {

 }
 docs.populate({path: 'books'}, function(err, doc) {
 console.log(doc)
 })
 });*/

/*user.findOne({name: '云若风生'}).populate('bookId', 'name').exec(function(err, docs) {
  console.log(docs)
});*/

