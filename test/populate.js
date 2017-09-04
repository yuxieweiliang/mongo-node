import mongoose, { Schema } from 'mongoose';
let db = mongoose.connect('mongodb://127.0.0.1:27017/populate');
let { model } = db;

let UserSchema = new Schema({
  bookId: {type: Schema.Types.ObjectId, ref: 'book'},
  name: String,
  introduce: String,
  age: Number,
  Id: Schema.Types.ObjectId
});
let user = model('User', UserSchema);

let BookSchema = new Schema({
  name: STring,
  picId: {type: Schema.Types.ObjectId, ref: 'pic'}

});
let book = model('Book', BookSchema);

let PicSchema = new Schema({
  url: String,
  name: String,
  size: Object
});
let pic = model('Pic', PicSchema);

user.create([{name: '云若风生', age: 30},{name: '雨歇微凉', age: 20}], function(err, docs) {
  book.create({name: '冰与火之歌'}, function(err, docs){
    pic.create({url: 'fdsa/ff/aa', name: 'MM', size: {width: 100, height: 100}}, function(err, docs) {
      console.log('pic', docs)
    })
  })
});

user.find({}, function(err, docs) {
  console.log(docs)
});

user.find().populate('bookId', '_id name').exec(function(err, docs) {
  console.log(docs)
});

