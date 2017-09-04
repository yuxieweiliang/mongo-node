var mongoose = require('mongoose');
var Schema   = mongoose.Schema;




var SchoolSchema = new Schema({
  name  : { type: String, unique: true },
  posts : [{ type: Schema.Types.ObjectId, ref: 'Classes' }]
});
var school = mongoose.model('School', SchoolSchema);

var ClassSchema = new Schema({
  classes : [{ type: Schema.Types.ObjectId, ref: 'Classes' }],
  title    : String,
  content  : String
});
var classes = mongoose.model('Classes', ClassSchema);


var studesSchema = new Schema({
  name: String,
  classes: { type: Schema.Types.ObjectId, ref: "Classes" },
  school: { type: Schema.Types.ObjectId, ref: "School" }
});
var studes = mongoose.model('Class', studesSchema);

mongoose.connect('mongodb://localhost/population-test', function (err){
  if (err) throw err;
  //createData();
});

function createData() {

  var userIds    = [mongoose.Types.ObjectId(), mongoose.Types.ObjectId(), mongoose.Types.ObjectId()];
  var postIds    = [mongoose.Types.ObjectId(), mongoose.Types.ObjectId(), mongoose.Types.ObjectId()];
  var commentIds = [mongoose.Types.ObjectId(), mongoose.Types.ObjectId(), mongoose.Types.ObjectId()];

  var users    = [];
  var posts    = [];
  var comments = [];

  userIds.map((item) => users.push({
    _id   : item,
    name  : 'aikin',
    posts : [item]
  }));

  postIds.map((item) => posts.push({
    _id   : item,
    name  : 'aikin',
    posts : [item]
  }));

  commentIds.map((item) => comments.push({
    _id   : item,
    name  : 'aikin',
    posts : [item]
  }));

  school.create(users, function(err, docs) {
    classes.create(posts, function(err, docs) {
      studes.create(comments, function(err, docs) {
      });
    });
  });
}

/*Post.find({}, function(err, docs) {
  console.log(docs)
})*/
studes.findOne({name: 'aikin'})
    .exec(function(err, doc) {

      var opts = [{
        path   : 'posts',
        select : 'title'
      }];
      console.log(doc)

      /*doc.populate(opts, function(err, populatedDoc) {
        console.log(populatedDoc);  // post-by-aikin
      });*/
    });