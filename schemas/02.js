







var book = new Schema({
  title:  String,
  author: {
    id: {user: Schema.Types.ObjectId, ref: 'user'},
    dates: {created: Date},
    account: {
      username: String,
      password: String
    },
    location,
    locked,
    name,
    username,
    permissions,
    site_admin,
    type: "User",
    // 个人的连接
    urls: {
      avatar,
      profile,
      stars,
    },
    // 已经认证
    verified,
    // 个人网站地址
    website: String,
  },
  body:   String,
  counts:   {
    changeRequests,
    discussions,
    stars,
    subscriptions,
    updates,
  },
  date: { type: Date, default: Date.now },
  // 评论
  comments: [{
    body: String,
    date: Date,
    author: {id: Schema.Types.ObjectId, ref: 'author'}
  }],
  // 回复
  reply: [{
    body: String,
    date: Date,
    comment: {id: Schema.Types.ObjectId, ref: 'author'}
  }],
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});