import mongoose, { Schema } from 'mongoose';
let db = mongoose.connect('mongodb://127.0.0.1:27017/populate');
let { model } = db;

let UserSchema = new Schema({
  name: String,
  introduce: String,
  age: Number,
  id: Schema.Types.ObjectId,
  phone: String,
  address: String,
  job: String,
  include: {
    book: [{type: Schema.Types.ObjectId, ref: 'book'}],

  },
});
let user = model('User', UserSchema);

let BookSchema = new Schema({
  name: String,
  picId: {type: Schema.Types.ObjectId, ref: 'pic'}

});
let book = model('Book', BookSchema);

let PicSchema = new Schema({
  url: String,
  name: String,
  size: Object
});
let pic = model('Pic', PicSchema);
let id = [mongoose.Types.ObjectId, mongoose.Types.ObjectId];

user.create([
  {name: '云若风生', age: 30, bookId:id[0]},
  {name: '雨歇微凉', age: 20, bookId:id[1]}
], function(err, docs) {
  book.create({name: '冰与火之歌', id: id[0]}, function(err, docs){
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

