import { Document, Schema, model } from 'mongoose';

export interface UserDocument extends Document {
  u_id: number;
  username: string;
  password: string;
  name?: string;
  sex?: string;
  age?: number;
  about_me?: string;
  registered_time?: Date;
  friends?: string[];
  pre_friends?: string[];
  topics?: string[];
}

const UserSchema = new Schema<UserDocument>({
  u_id: Schema.Types.ObjectId,
  username: String,    // 注册用户名
  password: String,   // 用户密码

  name: { type: String, default: '默认昵称' },  // 用户昵称
  age: { type: Number, default: Math.round(Math.random() * 100) },
  sex: { type: String, default: 'female' },
  about_me: { type: String, default: '岁月静好，可你还不来' },
  registered_time: { type: Date, default: Date.now },   // 注册时间

  friends: [String],     // 用户好友列表
  pre_friends: [String],   // 已添加但对方还未接受的好友列表
  topics: [String]       // 用户消息列表（话题）
});

const UserModel = model<UserDocument>('User', UserSchema);

export default UserModel;
