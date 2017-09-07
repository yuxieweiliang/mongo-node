var book = new Schema({
  // 标题
  title:  String,
  author: {id: Schema.Types.ObjectId, ref: 'user'},
  // 主体
  body:   String,
  // 名字
  name:   String,
  id: String,
  // 语言
  language: String,
  // 许可
  license: String,
  // 锁定
  locked: String,
  // 封面图片地址
  cover:   {
    large: String,
    small: String
  },
  // 权限
  permissions:   {
    admin: Boolean,
    edit: Boolean,
    important: Boolean,
  },
  // 出版
  publish:   {
    // 创建者
    builder: String,
    // 默认分支
    defaultBranch: String,
    // 电子书
    ebooks: Boolean,
  },
  // 权限
  public: Boolean,
  // 状态
  status: 'published',
  // 模板
  template: 'base',
  // 时间
  dates:   {
    // 创建
    created: String,
    // 发布
    build: String
  },
  // 相关
  description,
  // 计数
  counts:   {
    // 变更请求
    changeRequests,
    // 讨论
    discussions,
    // 星星
    stars,
    // 订阅
    subscriptions,
    // 更新
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
    // 评论者的id
    comment: {id: Schema.Types.ObjectId, ref: 'author'},
    // 回复者的id
    author: {id: Schema.Types.ObjectId, ref: 'author'}
  }],
  // 是否隐藏
  hidden: Boolean,
  // 元
  effect: {
    // 票
    votes: Number,
    // 支持
    favor:  Number,
    // 喜欢
    love:  Number,
    // 收藏
    collection:  Number,
  }
});