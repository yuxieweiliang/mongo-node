







var user = new Schema({
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
});