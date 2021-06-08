import { Document, Schema, model } from 'mongoose';

const MassageSchema = new Schema({
  id: String,
  content: String,
  topic_id: String,
  user_id: String,
  create_time: String
})

export default model('Message', MassageSchema);
